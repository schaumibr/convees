import React from 'react';
import { Link } from 'react-router-dom';

function Career() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        
        {/* Tag */}
        <span style={styles.tag}>Work in Progress 🚧</span>

        {/* Main Heading */}
        <h1 style={styles.heading}>We're Continuously Improving</h1>

        {/* Subheading */}
       

        {/* Main Text */}
        <p style={styles.text}>
          We are actively building, testing, and refining our platform to bring you the best experience possible. While we aren't currently hiring for full-time roles, we are always open to connecting with passionate people.
        </p>

        {/* Highlight Box */}
        <div style={styles.highlightBox}>
          <h3 style={styles.boxTitle}>Welcome to Funding Opportunities 💡</h3>
          <p style={styles.boxText}>
            If you are an investor or an organization that shares our vision, we would love to hear from you.
          </p>
        </div>

        {/* Contact CTA */}
        <div style={styles.contactSection}>
          <p style={styles.contactText}>Please contact if you have any queries:</p>
          <Link to="/contact" style={styles.button}>
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}

// Using inline styles for a quick, clean setup. 
// You can move these to your Features.css or App.css if you prefer.
const styles = {
  pageContainer: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f8fafc', // Light modern gray background
  },
  cardContainer: {
    maxWidth: '700px',
    backgroundColor: '#ffffff',
    padding: '3rem 4rem',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
  },
  tag: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontWeight: '600',
    fontSize: '0.875rem',
    borderRadius: '999px',
    marginBottom: '1.5rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '0.5rem',
    lineHeight: '1.2',
  },
  subheading: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#64748b',
    marginBottom: '2rem',
  },
  text: {
    fontSize: '1.125rem',
    color: '#334155',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  highlightBox: {
    backgroundColor: '#f1f5f9',
    padding: '2rem',
    borderRadius: '16px',
    marginBottom: '2.5rem',
    borderLeft: '4px solid #3b82f6',
    textAlign: 'left',
  },
  boxTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '0.75rem',
  },
  boxText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.5',
    margin: 0,
  },
  contactSection: {
    marginTop: '2rem',
  },
  contactText: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#64748b',
    marginBottom: '1rem',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '0.875rem 2rem',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
  }
};

export default Career;