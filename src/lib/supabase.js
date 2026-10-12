// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wnweqxekguwqgyzjqqtm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ykZrHF6yMYexN5OCF_sLgA_kyNuHgeO';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);