import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cwmszxwmdowfvosijamv.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3bXN6eHdtZG93ZnZvc2lqYW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5ODYzOTAsImV4cCI6MjAyNzU2MjM5MH0.fQf5dNILDpoJmBBAKT2or-HNJkx8xD4__X4L8HqESuo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
