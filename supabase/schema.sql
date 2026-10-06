CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  game_name text,
  free_fire_uid text,
  avatar_url text,
  role text NOT NULL DEFAULT 'user',
  deposit_balance numeric DEFAULT 0,
  winning_balance numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.tournaments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  map_type text,
  prize_pool numeric DEFAULT 0,
  entry_fee numeric DEFAULT 0,
  slots_total integer DEFAULT 0,
  slots_taken integer DEFAULT 0,
  match_time timestamptz,
  status text DEFAULT 'upcoming',
  rules text,
  created_by uuid REFERENCES public.users(id),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.tournament_joins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id),
  tournament_id uuid REFERENCES public.tournaments(id),
  joined_at timestamptz DEFAULT now(),
  status text DEFAULT 'joined'
);

CREATE TABLE IF NOT EXISTS public.transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id),
  type text NOT NULL,
  amount numeric NOT NULL,
  status text DEFAULT 'success',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.broadcasts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  created_by uuid REFERENCES public.users(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tournament_joins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.broadcasts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Public read tournaments" ON public.tournaments
  FOR SELECT USING (true);

CREATE POLICY "Moderators can manage tournaments" ON public.tournaments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users u
      WHERE u.id = auth.uid() AND u.role IN ('moderator', 'super_admin')
    )
  );

CREATE POLICY "Users can read their joins" ON public.tournament_joins
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own joins" ON public.tournament_joins
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wallet actions" ON public.transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public read broadcasts" ON public.broadcasts
  FOR SELECT USING (true);
