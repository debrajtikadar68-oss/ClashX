export type TournamentCategory =
  | 'SOLO BR'
  | 'DUO BR'
  | 'DUO PR KILL'
  | 'SOLO PER KILL'
  | 'LONE WOLF'
  | 'CS CHALLENGERS'
  | 'CLASH SQUAD'
  | 'LOSS TO WIN';

export type MatchStatus = 'upcoming' | 'live' | 'completed';

export type Tournament = {
  id: string;
  title: string;
  category: TournamentCategory;
  mapType: string;
  prizePool: number;
  entryFee: number;
  slotsLeft: number;
  totalSlots: number;
  matchTime: string;
  status: MatchStatus;
  rules: string;
  roomId?: string;
  password?: string;
  createdBy?: string;
  isJoined?: boolean;
};

export type TransactionType = 'deposit' | 'withdrawal' | 'entry' | 'win';

export type WalletTransaction = {
  id: string;
  type: TransactionType;
  amount: number;
  status: 'success' | 'pending' | 'failed';
  createdAt: string;
};

export type LeaderboardEntry = {
  id: string;
  name: string;
  avatar: string;
  wins: number;
  earnings: number;
  rank: number;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  gameName: string;
  gameId: string;
  avatar: string;
  role: 'user' | 'moderator' | 'super_admin';
  depositBalance: number;
  winningBalance: number;
};
