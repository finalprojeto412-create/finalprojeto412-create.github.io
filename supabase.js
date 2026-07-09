const SUPABASE_URL = "https://nnqajazhftanluuouihh.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_PLtLUitzi7OyYarqL1sjAg_wFYRMafm";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
// TESTE
console.log("Supabase conectado!");
console.log(supabase);
