# ClashX

ClashX is a premium esports tournament mobile web app for Free Fire players. It is built with React + TypeScript and is designed to work with Supabase for authentication, tournament data, wallet flows, and role-based admin controls.

## Features

- Professional dark/light esports UI
- Dynamic tournament category tabs
- My Matches tracking
- Wallet with UPI add money, withdrawal, and transaction ledger
- Leaderboards and profile management
- Moderator and super admin panel
- Supabase-ready schema and session-aware data layer

## Getting started

1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env` and add your project credentials.
3. Start the local app:
   npm run dev

## Required environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Supabase schema

See `supabase/schema.sql` for the base database layout, including `users`, `tournaments`, `tournament_joins`, `transactions`, and `broadcasts`.

## Notes

The project includes mock fallback data for UI development and local testing. Once valid Supabase credentials are added, the app can fetch live data from Supabase during runtime.
