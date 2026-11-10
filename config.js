
const SUPABASE_URL = "https://dhhiabobhzmjqenkfayn.supabase.co";
const SUPABASE_KEY = "sb_publishable_d7OydheXkPyEBm9AOSt3Tg__-SgrvgN";

// نطاق داخلي لتوليد معرّف الدخول
// لا يحتاج المستخدم إلى إدخال هذا البريد
const LOGIN_DOMAIN = "hr2020-login.com";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
