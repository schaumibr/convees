import './Privacy.css'

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: (
      <>
        <p>
          Welcome to Communitas. We are committed to protecting your privacy and
          ensuring you understand how we collect, use, and safeguard your
          information. This Privacy Policy explains our practices regarding
          personal data collected through our platform.
        </p>
        <p>
          By using Communitas, you agree to the collection and use of information
          in accordance with this policy. We will never sell your personal data
          to third parties.
        </p>
      </>
    ),
  },
  {
    id: 'data-collection',
    title: '2. Information We Collect',
    body: (
      <>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Account information:</strong> Name, email address, and password when you create an account.</li>
          <li><strong>Profile information:</strong> Neighborhood, interests, and any details you choose to add to your public profile.</li>
          <li><strong>Address verification:</strong> We verify your address to connect you to the correct neighborhood group. We store only the postal code and neighborhood association, not your full address.</li>
          <li><strong>Usage data:</strong> Information about how you interact with the platform, including events attended, posts made, and resources shared.</li>
          <li><strong>Device information:</strong> IP address, browser type, and operating system for security and analytics purposes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-usage',
    title: '3. How We Use Your Information',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Connect you with your neighborhood and nearby members</li>
          <li>Facilitate event organization, resource sharing, and forum discussions</li>
          <li>Send you notifications about relevant community activity</li>
          <li>Improve our platform features and user experience</li>
          <li>Ensure platform security and prevent abuse</li>
          <li>Provide customer support and respond to your inquiries</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-sharing',
    title: '4. Information Sharing',
    body: (
      <>
        <p>
          We do not sell, trade, or rent your personal information to others.
          We may share limited data in these situations:
        </p>
        <ul>
          <li><strong>With other members:</strong> Your profile name and neighborhood are visible to verified members in your community.</li>
          <li><strong>Service providers:</strong> Third-party services that help us operate the platform (e.g., email delivery, analytics), under strict confidentiality agreements.</li>
          <li><strong>Legal compliance:</strong> If required by law or to protect the rights, safety, or property of our users.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    body: (
      <>
        <p>
          We implement industry-standard security measures to protect your
          personal information, including encrypted data transmission (TLS),
          hashed passwords, and secure data storage. Access to personal data
          is restricted to authorized personnel only.
        </p>
        <p>
          While we strive to protect your information, no method of transmission
          over the Internet is completely secure. We continuously improve our
          security practices to safeguard your data.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '6. Cookies and Tracking',
    body: (
      <>
        <p>
          We use cookies and similar technologies to remember your preferences,
          keep you signed in, and understand how you use our platform. You can
          control cookies through your browser settings, but disabling them
          may affect some features.
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for login and core functionality.</li>
          <li><strong>Preference cookies:</strong> Remember your settings and choices.</li>
          <li><strong>Analytics cookies:</strong> Help us understand usage patterns to improve the platform.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '7. Your Privacy Rights',
    body: (
      <>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
          <li><strong>Deletion:</strong> Request that we delete your account and associated data.</li>
          <li><strong>Opt-out:</strong> Unsubscribe from non-essential communications at any time.</li>
          <li><strong>Data portability:</strong> Receive your data in a portable format.</li>
        </ul>
        <p>To exercise any of these rights, contact us at privacy@communitas.app.</p>
      </>
    ),
  },
  {
    id: 'children',
    title: '8. Children\'s Privacy',
    body: (
      <>
        <p>
          Communitas is designed for adults and is not intended for children
          under the age of 16. We do not knowingly collect personal information
          from anyone under 16. If you believe a minor has registered on our
          platform, please contact us so we can remove their account.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '9. Changes to This Policy',
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the date at the bottom of this page and notify you of
          significant changes via email or an in-app notification. We encourage
          you to review this policy periodically.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, we are here to help.
        </p>
        <div className="privacy-contact">
          <h4>Privacy Team</h4>
          <p>Email: privacy@communitas.app</p>
          <p>Phone: (555) 123-4567</p>
          <p>Mail: 123 Community Lane, Portland, OR 97201</p>
        </div>
      </>
    ),
  },
]

function Privacy() {
  return (
    <>
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <div className="privacy-layout">
        <nav className="privacy-toc">
          <h4>Contents</h4>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s/, '')}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="privacy-content">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className={`privacy-card privacy-section animate-fade-up delay-${Math.min(i + 1, 6)}`}>
              <h3>{s.title}</h3>
              {s.body}
            </section>
          ))}
        </div>
      </div>

      <section className="section-sm" style={{ background: 'var(--neutral-100)' }}>
        <div className="container text-center">
          <p className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>
            This privacy policy is part of our commitment to transparency.
            If you have concerns about how your data is handled, please reach out.
          </p>
        </div>
      </section>
    </>
  )
}

export default Privacy
