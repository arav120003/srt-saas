-- Enable row level security for users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Users can insert their own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;

-- Create policies for users table
CREATE POLICY "Users can view their own data"
ON users FOR SELECT
USING (auth.uid() = id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own data"
ON users FOR INSERT
WITH CHECK (auth.uid() = id OR auth.uid() IS NULL);

CREATE POLICY "Users can update their own data"
ON users FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Enable realtime for users table
ALTER PUBLICATION supabase_realtime ADD TABLE users;