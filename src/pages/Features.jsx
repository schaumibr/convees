import { Link } from 'react-router-dom'
import './Features.css'

const features = [
  {
    icon: 'primary',
    title: 'Event Calendar',
    desc: 'Discover and join local events, from block parties to book clubs. Create your own with one click.',
    svg: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  },
  {
    icon: 'secondary',
    title: 'Community Forums',
    desc: 'Discuss neighborhood topics, ask for recommendations, and share local knowledge with verified members.',
    svg: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  },
  {
    icon: 'accent',
    title: 'Member Groups',
    desc: 'Create focused groups around shared interests: gardening, running, parenting, and more.',
    svg: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    icon: 'success',
    title: 'Neighborhood Map',
    desc: 'Interactive map showing nearby members, events, shared resources, and community spaces.',
    svg: <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>,
  },
  {
    icon: 'warning',
    title: 'Resource Sharing',
    desc: 'Borrow and lend tools, equipment, and skills. Track items and build a culture of sharing.',
    svg: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>,
  },
  {
    icon: 'error',
    title: 'Smart Notifications',
    desc: 'Get notified about events and discussions that matter to you. Fully customizable preferences.',
    svg: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
  },
]

function Features() {
  return (
    <>
      <section className="features-hero">
        <div className="container">
          <h1>Features That Connect</h1>
          <p>
            Every feature in Communitas is designed to spark real-world
            interactions and make neighborhood life richer, safer, and more fun.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Everything Your Neighborhood Needs</h2>
            <p>Six powerful tools working together to build a thriving community.</p>
          </div>
          <div className="grid grid-3">
            {features.map((feat, i) => (
              <div key={feat.title} className={`card card-hover feature-card animate-fade-up delay-${i + 1}`}>
                <div className={`feature-card-icon ${feat.icon}`}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {feat.svg}
                  </svg>
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--neutral-100)' }}>
        <div className="container">
          <div className="section-heading">
            <h2>Built for Real Impact</h2>
            <p>Three areas where Communitas is transforming neighborhood life.</p>
          </div>

          <div className="feature-deep">
            <div className="feature-deep-img animate-fade-up">
              <img
                src="https://images.pexels.com/photos/13158043/pexels-photo-13158043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Outdoor community celebration"
                loading="lazy"
              />
            </div>
            <div className="feature-deep-content animate-fade-up delay-2">
              <h3>Bringing People Together at Events</h3>
              <p>
                Our event calendar makes it effortless to discover, join, and
                organize neighborhood gatherings. From small coffee meetups to
                large block parties, you will always know what is happening nearby.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  RSVP with one click and sync to your personal calendar
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Set capacity limits and automatic waitlists
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Track attendance and collect feedback after events
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-deep reverse">
            <div className="feature-deep-img animate-fade-up">
              <img
                src="https://images.pexels.com/photos/16934319/pexels-photo-16934319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Neighbors sharing a barbecue gathering"
                loading="lazy"
              />
            </div>
            <div className="feature-deep-content animate-fade-up delay-2">
              <h3>Sharing Resources, Reducing Waste</h3>
              <p>
                Why buy a power drill you will use once? Our resource sharing
                system lets neighbors lend and borrow tools, equipment, and
                skills, building trust while saving money and reducing waste.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Browse available items by category or distance
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Track borrowing history and item condition
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Build a sharing reputation with neighbor reviews
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-deep">
            <div className="feature-deep-img animate-fade-up">
              <img
                src="https://images.pexels.com/photos/24864209/pexels-photo-24864209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Evening community gathering with lights"
                loading="lazy"
              />
            </div>
            <div className="feature-deep-content animate-fade-up delay-2">
              <h3>Staying Informed with Smart Notifications</h3>
              <p>
                Never miss what matters. Our notification system learns your
                preferences and keeps you updated on the events, discussions,
                and resources most relevant to your interests.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Customize notification types by category and urgency
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Quiet hours and digest modes for fewer interruptions
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Emergency alerts for urgent neighborhood updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Want to see it in action?
          </h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>
            Reach out and we will walk you through how Communitas can work for your neighborhood.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default Features
