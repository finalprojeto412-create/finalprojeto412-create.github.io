const SUPABASE_URL = "https://nnqajazhftanluuouihh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucWFqYXpoZnRhbmx1dW91aWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1ODQxNTYsImV4cCI6MjA5OTE2MDE1Nn0.PoRQ65eOy1z2dzDW96LALev3jGymj4lg2TJFMDl1fzU";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase conectado!");
console.log(supabaseClient);
