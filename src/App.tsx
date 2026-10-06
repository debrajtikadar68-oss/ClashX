import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
import { supabase } from './lib/supabase';
import { categories, mockAdminBroadcasts, mockLeaderboard, mockProfile, mockTournaments, mockTransactions, superAdminEmail } from './data/mockData';
import type { Profile, Tournament, WalletTransaction } from './types';

const tabOptions = ['Upcoming', 'Live', 'Played'] as const;

type TabName = (typeof tabOptions)[number];

const currency = (value: number) => `₹${value.toLocaleString('en-IN')}`;

function App() {
  const [profile, setProfile] = useState<Profile>(mockProfile);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('SOLO BR');
  const [matchTab, setMatchTab] = useState<TabName>('Upcoming');
  const [tournaments, setTournaments] = useState<Tournament[]>(mockTournaments);
  const [transactions, setTransactions] = useState<WalletTransaction[]>(mockTransactions);
  const [broadcasts, setBroadcasts] = useState(mockAdminBroadcasts);
  const [winnerForm, setWinnerForm] = useState({ tournamentId: '', winner: '', roomId: '', password: '' });

  useEffect(() => {
    const loadSupabaseData = async () => {
      if (!supabase) return;

      try {
        const { data: tournamentData } = await supabase.from('tournaments').select('*').limit(20);
        const { data: transactionData } = await supabase.from('transactions').select('*').limit(20);

        if (tournamentData && tournamentData.length > 0) {
          setTournaments(
            tournamentData.map((item: any) => ({
              id: item.id,
              title: item.title,
              category: item.category || 'SOLO BR',
              mapType: item.map_type || 'Erangel',
              prizePool: Number(item.prize_pool || 0),
              entryFee: Number(item.entry_fee || 0),
              slotsLeft: Math.max(0, Number(item.slots_total || 0) - Number(item.slots_taken || 0)),
              totalSlots: Number(item.slots_total || 0),
              matchTime: item.match_time || 'TBD',
              status: item.status || 'upcoming',
              rules: item.rules || 'Fair play rules apply.',
              roomId: item.room_id || '',
              password: item.password || '',
            }))
          );
        }

        if (transactionData && transactionData.length > 0) {
          setTransactions(
            transactionData.map((item: any) => ({
              id: item.id,
              type: item.type || 'deposit',
              amount: Number(item.amount || 0),
              status: item.status || 'success',
              createdAt: item.created_at || new Date().toISOString(),
            }))
          );
        }
      } catch (error) {
        console.warn('Supabase fetch ignored in local fallback mode:', error);
      }
    };

    loadSupabaseData();
  }, []);

  const filteredMatches = useMemo(() => {
    return tournaments.filter((match) => match.category === activeCategory);
  }, [activeCategory, tournaments]);

  const joinedMatches = useMemo(() => {
    return tournaments.filter((match) => match.isJoined || match.status === 'live');
  }, [tournaments]);

  const upcomingMatches = joinedMatches.filter((match) => match.status === 'upcoming');
  const liveMatches = joinedMatches.filter((match) => match.status === 'live');
  const playedMatches = joinedMatches.filter((match) => match.status === 'completed');

  const visibleMyMatches =
    matchTab === 'Upcoming' ? upcomingMatches : matchTab === 'Live' ? liveMatches : playedMatches;

  const isSuperAdmin = profile.email.toLowerCase() === superAdminEmail.toLowerCase();
  const isModerator = profile.role === 'moderator' || isSuperAdmin;

  const handleJoin = (matchId: string) => {
    setTournaments((current) =>
      current.map((match) =>
        match.id === matchId && match.slotsLeft > 0
          ? { ...match, slotsLeft: match.slotsLeft - 1, isJoined: true, status: 'upcoming' }
          : match
      )
    );
  };

  const handleAddMoney = () => {
    setProfile((current) => ({
      ...current,
      depositBalance: current.depositBalance + 500,
    }));

    setTransactions((current) => [
      {
        id: `tx-${Date.now()}`,
        type: 'deposit',
        amount: 500,
        status: 'success',
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
  };

  const handleBroadcast = () => {
    const next = {
      id: `b-${Date.now()}`,
      title: 'Live Broadcast',
      message: 'The ClashX community is live and match portals are now open.',
    };
    setBroadcasts((current) => [next, ...current]);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-logo">C</div>
          <div>
            <p className="eyebrow">Esports Arena</p>
            <h1>ClashX</h1>
          </div>
        </div>

        <div className="top-actions">
          <button className="pill-button">Daily Free Entry</button>
          <div className="user-chip">
            <img src={profile.avatar} alt={profile.name} />
            <div>
              <strong>{profile.gameName}</strong>
              <span>{profile.role}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="content-area">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="badge">Pro League</span>
            <h2>Play. Win. Dominate.</h2>
            <p>
              Join premium Free Fire tournaments, claim your prize pool, and rise through the ClashX leaderboard.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Join Tournament</button>
              <button className="secondary-button">Watch Live</button>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span>Total Prize</span>
              <strong>{currency(128000)}</strong>
            </div>
            <div className="stat-card">
              <span>Live Rooms</span>
              <strong>42</strong>
            </div>
            <div className="stat-card">
              <span>Players</span>
              <strong>12.6k</strong>
            </div>
          </div>
        </section>

        <nav className="category-tabs" aria-label="Tournament categories">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? 'tab active' : 'tab'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <section className="panel-section">
          <div className="section-head">
            <h3>{activeCategory}</h3>
            <button className="ghost-button">View All</button>
          </div>

          <div className="match-grid">
            {filteredMatches.map((match) => (
              <article key={match.id} className="match-card">
                <div className="match-header">
                  <span className={`status-badge ${match.status}`}>{match.status}</span>
                  <span className="match-time">{match.matchTime}</span>
                </div>

                <div className="match-body">
                  <h4>{match.title}</h4>
                  <p>{match.mapType}</p>
                  <div className="meta-row">
                    <span>Slots Left: {match.slotsLeft}/{match.totalSlots}</span>
                    <span>Prize: {currency(match.prizePool)}</span>
                  </div>
                  <div className="meta-row">
                    <span>Entry: {currency(match.entryFee)}</span>
                    <span>Rules: {match.rules}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button className="primary-button" onClick={() => handleJoin(match.id)}>
                    {match.isJoined ? 'Joined' : 'Join'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel-section">
          <div className="section-head">
            <h3>My Matches</h3>
          </div>

          <div className="tab-switchers">
            {tabOptions.map((tab) => (
              <button
                key={tab}
                className={tab === matchTab ? 'segmented active' : 'segmented'}
                onClick={() => setMatchTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="match-grid compact-grid">
            {visibleMyMatches.length > 0 ? (
              visibleMyMatches.map((match) => (
                <article key={match.id} className="match-card compact">
                  <div className="match-card-top">
                    <p>{match.title}</p>
                    <span className={`status-badge ${match.status}`}>{match.status}</span>
                  </div>
                  <div className="mini-stat-row">
                    <span>{match.mapType}</span>
                    <span>{match.matchTime}</span>
                  </div>
                  <div className="mini-stat-row">
                    <span>Room ID: {match.roomId || 'Pending'}</span>
                    <span>Password: {match.password || 'TBA'}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">No matches in this section yet.</div>
            )}
          </div>
        </section>

        <section className="two-column-layout">
          <div className="panel-section wallet-panel">
            <div className="section-head">
              <h3>Wallet</h3>
            </div>

            <div className="wallet-summary">
              <div className="wallet-box">
                <span>Current Deposit Balance</span>
                <strong>{currency(profile.depositBalance)}</strong>
              </div>
              <div className="wallet-box highlight">
                <span>Winning Balance</span>
                <strong>{currency(profile.winningBalance)}</strong>
              </div>
            </div>

            <div className="wallet-actions">
              <button className="primary-button" onClick={handleAddMoney}>Add Money via UPI</button>
              <button className="secondary-button">UPI Withdrawal</button>
              <button className="secondary-button">Redeem Code</button>
            </div>

            <div className="transactions-panel">
              <h4>Transaction History</h4>
              <ul>
                {transactions.map((tx) => (
                  <li key={tx.id}>
                    <div>
                      <strong>{tx.type}</strong>
                      <span>{new Date(tx.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="amount-wrap">
                      <strong>{tx.type === 'deposit' || tx.type === 'win' ? '+' : '-'}{currency(tx.amount)}</strong>
                      <span className={`tx-status ${tx.status}`}>{tx.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel-section leaderboard-panel">
            <div className="section-head">
              <h3>Leaderboard</h3>
            </div>

            <div className="leaderboard-list">
              {mockLeaderboard.map((entry) => (
                <div key={entry.id} className="leaderboard-item">
                  <div className="leaderboard-user">
                    <span className="rank-pill">#{entry.rank}</span>
                    <img src={entry.avatar} alt={entry.name} />
                    <div>
                      <strong>{entry.name}</strong>
                      <span>{entry.wins} wins</span>
                    </div>
                  </div>
                  <strong>{currency(entry.earnings)}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="two-column-layout">
          <div className="panel-section profile-panel">
            <div className="section-head">
              <h3>Profile & Settings</h3>
            </div>

            <div className="profile-form">
              <div className="field-row">
                <label>
                  Game Name
                  <input value={profile.gameName} onChange={(e) => setProfile((current) => ({ ...current, gameName: e.target.value }))} />
                </label>
                <label>
                  Free Fire Game ID
                  <input value={profile.gameId} onChange={(e) => setProfile((current) => ({ ...current, gameId: e.target.value }))} />
                </label>
              </div>

              <div className="profile-links">
                <button className="secondary-button">Join Private Tournament</button>
                <button className="secondary-button">Withdrawals</button>
                <button className="secondary-button">Transactions</button>
                <button className="secondary-button">Customer Support</button>
              </div>
            </div>
          </div>

          <div className="panel-section admin-panel">
            <div className="section-head">
              <h3>Admin & Moderator</h3>
            </div>

            {isModerator ? (
              <>
                <div className="admin-box">
                  <h4>Create Tournament</h4>
                  <div className="admin-form">
                    <input placeholder="Title" />
                    <select defaultValue="SOLO BR">
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <input placeholder="Prize Pool" />
                    <input placeholder="Entry Fee" />
                    <input placeholder="Match Time" />
                    <textarea placeholder="Rules" rows={3} />
                  </div>
                  <button className="primary-button">Publish Match</button>
                </div>

                <div className="admin-box">
                  <h4>Winner Declaration</h4>
                  <div className="admin-form">
                    <select value={winnerForm.tournamentId} onChange={(e) => setWinnerForm((current) => ({ ...current, tournamentId: e.target.value }))}>
                      <option value="">Select tournament</option>
                      {tournaments.map((match) => (
                        <option key={match.id} value={match.id}>{match.title}</option>
                      ))}
                    </select>
                    <input placeholder="Winner Name" value={winnerForm.winner} onChange={(e) => setWinnerForm((current) => ({ ...current, winner: e.target.value }))} />
                    <input placeholder="Room ID" value={winnerForm.roomId} onChange={(e) => setWinnerForm((current) => ({ ...current, roomId: e.target.value }))} />
                    <input placeholder="Password" value={winnerForm.password} onChange={(e) => setWinnerForm((current) => ({ ...current, password: e.target.value }))} />
                  </div>
                  <button className="primary-button">Declare Winner</button>
                </div>

                <div className="admin-box">
                  <h4>Broadcast</h4>
                  <ul className="broadcast-list">
                    {broadcasts.map((item) => (
                      <li key={item.id}>
                        <strong>{item.title}</strong>
                        <span>{item.message}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="primary-button" onClick={handleBroadcast}>Send Broadcast</button>
                </div>
              </>
            ) : (
              <div className="restricted-state">
                <p>Access restricted to moderators and the super admin.</p>
                <small>Super admin email: {superAdminEmail}</small>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
