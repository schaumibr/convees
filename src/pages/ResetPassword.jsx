// src/pages/ResetPassword.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const [status, setStatus] = useState('checking'); // checking | allowed | denied
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [deniedReason, setDeniedReason] = useState('');

  // GUARD: sirf recovery session allow
  useEffect(() => {
    let cancelled = false;

    async function verifyAccess() {
      const recoveryFlag = sessionStorage.getItem('pw_recovery');
      const { data: { session } } = await supabase.auth.getSession();

      if (!session || recoveryFlag !== '1') {
        if (!cancelled) {
          setDeniedReason(
            !session
              ? 'Your reset session has expired.'
              : 'You can only reset your password using a valid link from your email.'
          );
          setStatus('denied');
        }
        return;
      }

      if (!cancelled) setStatus('allowed');
    }

    verifyAccess();
    return () => { cancelled = true; };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const { data: { session } } = await supabase.auth.getSession();
    if (!session || sessionStorage.getItem('pw_recovery') !== '1') {
      setDeniedReason('Your reset session has expired. Please request a new link.');
      setStatus('denied');
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }
    if (password.length < 8) {
      setMessage({ text: 'Password must be at least 8 characters.', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setMessage({ text: error.message, type: 'error' });
        return;
      }

      sessionStorage.removeItem('pw_recovery');
      await supabase.auth.signOut();

      setDone(true);
    } catch {
      setMessage({ text: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  }

  if (status === 'checking') {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <p style={styles.p}>Verifying your reset link…</p>
        </div>
      </div>
    );
  }

  if (status === 'denied') {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.icon}>⚠️</div>
          <h1 style={styles.h1}>Invalid Reset Link</h1>
          <p style={styles.p}>{deniedReason}</p>
          <p style={styles.p}>Please request a new reset link from the Convees app.</p>
          <p style={styles.appName}>Convees</p>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.icon}>✅</div>
          <h1 style={styles.h1}>Password Reset Successfully!</h1>
          <p style={styles.p}>Your password has been updated.</p>
          <p style={styles.p}>
            You can now go back to the <strong>Convees app</strong> and sign in
            with your new password.
          </p>
          <p style={styles.appName}>Convees</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.icon}>🔒</div>
        <h1 style={styles.h1}>Set New Password</h1>
        <p style={styles.p}>Enter your new password below.</p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <label style={styles.label} htmlFor="password">New Password</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Enter new password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
          <input
            style={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="Confirm new password"
            required
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
  style={{
    ...styles.button,
    opacity: loading ? 0.5 : 1,              // ← ye line honi chahiye
    cursor: loading ? 'not-allowed' : 'pointer',
  }}
  type="submit"
  disabled={loading}
>
  {loading ? 'Updating…' : 'Update Password'}
</button>
        </form>

        {message.text && (
          <div
            style={{
              ...styles.message,
              backgroundColor: message.type === 'error' ? '#FEF2F2' : '#F0FDF4',
              color: message.type === 'error' ? '#DC2626' : '#16A34A',
            }}
          >
            {message.text}
          </div>
        )}

        <p style={styles.appName}>Convees</p>
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
  label: {
    display: 'block',
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
    fontWeight: 500,
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: 16,
    border: '1px solid #D1D5DB',
    borderRadius: 8,
    marginBottom: 16,
    outline: 'none',
    background: '#fff',
  },
  button: {
    width: '100%',
    padding: 14,
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#208AEF',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    // opacity yahan NAHI — inline style mein aayega
  },
  message: {
    marginTop: 16,
    fontSize: 14,
    padding: 10,
    borderRadius: 6,
  },
  appName: { fontSize: 13, color: '#94A3B8', marginTop: 32 },
};