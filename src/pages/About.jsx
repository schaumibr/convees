import { Link } from 'react-router-dom'
import './About.css'

const teamColors = [
  'linear-gradient(135deg, #3385fc, #1d66f0)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #f59e0b, #d97706)',
  'linear-gradient(135deg, #ef4444, #dc2626)',
]

const team = [
  {
  name: 'Shami Snehlata',
  role: 'Founder & CEO',
  bio: 'Product owner and software engineer building CONVEES to connect people, empower communities, and turn shared interests into meaningful real-world connections.',
  initials: 'SS'
}
  // { name: 'Marcus Johnson', role: 'Head of Community', bio: 'Former community organizer passionate about grassroots engagement.', initials: 'MJ' },
  // { name: 'Priya Patel', role: 'Lead Designer', bio: 'Design advocate making technology accessible for everyone.', initials: 'PP' },
  // { name: 'David Kim', role: 'CTO', bio: 'Engineer who believes great software strengthens human connections.', initials: 'DK' },
]

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1>About Convees</h1>
          <p>
            CONVEES a platform that bring people,organisations, groups, and activities together and people find, join and create meaningful communities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-img animate-fade-up">
              <img
                src="https://images.pexels.com/photos/5256819/pexels-photo-5256819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Team placing hands together in unity"
                loading="lazy"
              />
            </div>
            <div className="about-story-text animate-fade-up delay-2">
              <h2>Our Story</h2>
              <p>
                Bringing Communities Closer, in Germany and Around the World

CONVEES was born from a simple belief: technology should bring people together, not leave them feeling disconnected.

In today’s fast-moving world, people live, study, and work alongside one another, yet meaningful connections are not always easy to build. Students arrive at universities without knowing where to find their community. Professionals look for people who share their interests. Organizations struggle to bring their members together beyond everyday communication.
              </p>
              <p>
                We created CONVEES to help change that.

CONVEES is a community and event networking platform designed to connect people through shared interests, groups, activities, and real-world experiences. Whether it is a university in Germany, a workplace, a local community, or an organization anywhere in the world, our vision is to make finding your people easier.
              </p>
              <p>
                Starting in Germany, Building for the World

Germany is an important starting point for our vision, with its diverse universities, international students, workplaces, and communities. We want to help people feel more connected, especially those who are new to a city, beginning their studies, or looking for meaningful social and professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="section-heading">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we build and every decision we make.</p>
          </div>
          <div className="grid grid-3">
            <div className="card value-card animate-fade-up">
              <div className="value-icon primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx="17" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <h3>Inclusivity</h3>
              <p>Everyone belongs. We design for accessibility across ages, languages, and abilities so no neighbor is left behind.</p>
            </div>
            <div className="card value-card animate-fade-up delay-2">
              <div className="value-icon secondary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Trust</h3>
              <p>Verified membership and transparent moderation create a safe space where neighbors feel comfortable connecting.</p>
            </div>
            <div className="card value-card animate-fade-up delay-3">
              <div className="value-icon accent">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Connection</h3>
              <p>Every feature we build has one goal: creating meaningful real-world interactions between people who live near each other.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Meet the Team</h2>
            <p>The people behind Communitas, dedicated to building stronger communities.</p>
          </div>
          <div className="grid grid-4">
            {team.map((member, i) => (
              <div key={member.name} className={`card team-card animate-fade-up delay-${i + 1}`}>
                <div className="team-avatar" style={{ background: teamColors[i] }}>
                  {member.initials}
                </div>
                <h4>{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat">
              <div className="about-stat-num">12K+</div>
              <div className="about-stat-label">Active Members</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">80</div>
              <div className="about-stat-label">Neighborhoods</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">480+</div>
              <div className="about-stat-label">Events Organized</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">3.2K</div>
              <div className="about-stat-label">Resources Shared</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-100)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Ready to join your community?
          </h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>
            Explore what Communitas can do for your neighborhood.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/features" className="btn btn-primary btn-lg">See Features</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
