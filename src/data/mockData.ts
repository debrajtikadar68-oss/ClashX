import type { LeaderboardEntry, Profile, Tournament, WalletTransaction } from '../types';

export const categories = [
  'SOLO BR',
  'DUO BR',
  'DUO PR KILL',
  'SOLO PER KILL',
  'LONE WOLF',
  'CS CHALLENGERS',
  'CLASH SQUAD',
  'LOSS TO WIN',
] as const;

export const superAdminEmail = 'parimaltikadar110@gmail.com';

export const mockProfile: Profile = {
  id: 'p-1',
  name: 'Debraj Tikadar',
  email: 'parimaltikadar110@gmail.com',
  gameName: 'ClashXPro',
  gameId: '483741273',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  role: 'super_admin',
  depositBalance: 1280,
  winningBalance: 2840,
};

export const mockTournaments: Tournament[] = [
  {
    id: 't-1',
    title: 'Weekend Clash Royale',
    category: 'SOLO BR',
    mapType: 'Erangel',
    prizePool: 2400,
    entryFee: 30,
    slotsLeft: 14,
    totalSlots: 50,
    matchTime: 'Today, 8:30 PM',
    status: 'upcoming',
    rules: 'Solo battle, no teaming, fair play enforced.',
    roomId: 'CLX-118',
    password: 'vR1x!9',
    isJoined: true,
  },
  {
    id: 't-2',
    title: 'Rush Arena',
    category: 'DUO BR',
    mapType: 'Miramar',
    prizePool: 4800,
    entryFee: 50,
    slotsLeft: 22,
    totalSlots: 60,
    matchTime: 'Tomorrow, 9:00 PM',
    status: 'upcoming',
    rules: 'Duo only, only 1 squad entry allowed.',
  },
  {
    id: 't-3',
    title: 'Base Bombers',
    category: 'LONE WOLF',
    mapType: 'Sanhok',
    prizePool: 3200,
    entryFee: 25,
    slotsLeft: 9,
    totalSlots: 30,
    matchTime: 'Now Live',
    status: 'live',
    rules: 'Lone wolf format. Last player standing wins.',
    isJoined: true,
  },
  {
    id: 't-4',
    title: 'Kill Storm',
    category: 'DUO PR KILL',
    mapType: 'Purgatory',
    prizePool: 5200,
    entryFee: 60,
    slotsLeft: 7,
    totalSlots: 45,
    matchTime: 'Sun, 6:15 PM',
    status: 'upcoming',
    rules: 'Prize rush mode. Highest kills win.',
  },
  {
    id: 't-5',
    title: 'Power Push',
    category: 'CLASH SQUAD',
    mapType: 'Canyon',
    prizePool: 6500,
    entryFee: 80,
    slotsLeft: 5,
    totalSlots: 28,
    matchTime: 'Mon, 7:45 PM',
    status: 'upcoming',
    rules: 'Squad mode, consistent team play required.',
  },
  {
    id: 't-6',
    title: 'Double Trouble',
    category: 'LOSS TO WIN',
    mapType: 'Kalahari',
    prizePool: 2900,
    entryFee: 20,
    slotsLeft: 18,
    totalSlots: 40,
    matchTime: 'Completed',
    status: 'completed',
    rules: 'Play for comeback, top survivors earn.',
  },
];

export const mockTransactions: WalletTransaction[] = [
  { id: 'tx-1', type: 'deposit', amount: 500, status: 'success', createdAt: '2026-10-04 10:20' },
  { id: 'tx-2', type: 'entry', amount: 30, status: 'success', createdAt: '2026-10-04 15:40' },
  { id: 'tx-3', type: 'win', amount: 820, status: 'success', createdAt: '2026-10-05 19:10' },
  { id: 'tx-4', type: 'withdrawal', amount: 250, status: 'pending', createdAt: '2026-10-05 22:05' },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { id: 'l-1', name: 'ShadowRift', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', wins: 36, earnings: 18000, rank: 1 },
  { id: 'l-2', name: 'SniperVex', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', wins: 29, earnings: 14250, rank: 2 },
  { id: 'l-3', name: 'AstraX', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', wins: 24, earnings: 12100, rank: 3 },
  { id: 'l-4', name: 'ClashXPro', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', wins: 21, earnings: 9800, rank: 4 },
];

export const mockAdminBroadcasts = [
  { id: 'b-1', title: 'Server Prime Event', message: 'New tournament weekend drop is now live.' },
  { id: 'b-2', title: 'Prize Pool Update', message: 'Prize pool has been increased for all Duo BR matches.' },
];
