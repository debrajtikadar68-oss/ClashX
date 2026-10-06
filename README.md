# ClashX

ClashX is a premium esports tournament mobile web application for Free Fire players. It is designed as a React + TypeScript app with Supabase-powered authentication, tournament management, wallet flows, and moderator/admin controls.

## Getting started

1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env` and add your Supabase project credentials.
3. Start the development server:
   npm run dev

## Environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Included features

- Dynamic tournament catalog
- League category tabs
- My Matches tracking
- Wallet and transaction history
- Leaderboard
- Profile management
- Admin and moderator panel
- Supabase-ready schema and data layer

## Supabase SQL

See `supabase/schema.sql` for the recommended tables and RLS setup.
