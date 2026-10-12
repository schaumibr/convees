// src/pages/AuthCallback.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallback() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const searchParams = new URLSearchParams(window.location.search);

    const errorParam = hashParams.get('error') || searchParams.get('error');
    const errorDesc =
      hashParams.get('error_description') || searchParams.get('error_description');
    const type = hashParams.get('type') || searchParams.get('type');
    const code = searchParams.get('code');

    async function handle() {
      if (errorParam) {
        setError(
          errorDesc
            ? decodeURIComponent(errorDesc.replace(/\+/g, ' '))
            : 'This link is invalid or has expired.'
        );
        return;
      }

      // PKCE code exchange (naya Supabase flow)
      if (code) {
        const { error: exErr } = await supabase.auth.exchangeCodeForSession(code);
        if (exErr) {
          setError(exErr.message);
          return;
        }
      }

      // Confirm session valid hai
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError('This link is invalid or has expired.');
        return;
      }

      if (type === 'recovery') {
        // Recovery session mark karo
        sessionStorage.setItem('pw_recovery', '1');
        navigate('/reset-password', { replace: true });
      } else {
        // Email verification (signup confirm) ke liye
        navigate('/verified', { replace: true });
      }
    }

    handle();
  }, [navigate]);

  if (error) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.icon}>⚠️</div>
          <h1 style={styles.h1}>Link Expired</h1>
          <p style={styles.p}>{error}</p>
          <p style={styles.p}>Please request a new one from the Convees app.</p>
          <p style={styles.appName}>Convees</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <p style={styles.p}>Processing…</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  container: { textAlign: 'center', maxWidth: 400, width: '100%', padding: '32px 24px' },
  icon: { fontSize: 56, marginBottom: 20 },
  h1: { fontSize: 22, color: '#1E293B', marginBottom: 12, fontWeight: 600 },
  p: { fontSize: 15, color: '#64748B', lineHeight: 1.5, marginBottom: 8 },
  appName: { fontSize: 13, color: '#94A3B8', marginTop: 32 },
};