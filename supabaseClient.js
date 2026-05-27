import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://nozsfpjjxhxrjmksosmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5venNmcGpqeGh4cmpta3Nvc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODY5OTAsImV4cCI6MjA5NDc2Mjk5MH0.rmQaSDya4MOZPoDuEKqRV48XIRQKP26I9jj8tvq98PA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);