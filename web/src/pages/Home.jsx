import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className="hero">
        <svg
          className="hero-roots"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#74c69d" fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M250 520 L250 250 M250 300 C200 270 170 240 150 190 M250 300 C300 270 330 240 350 190 M250 360 C210 340 190 320 175 285 M250 360 C290 340 310 320 325 285 M250 250 C240 210 230 180 250 130 M250 250 C260 210 270 180 250 130" />
          </g>
          <g fill="#40916c">
            <circle cx="150" cy="190" r="10" />
            <circle cx="350" cy="190" r="10" />
            <circle cx="175" cy="285" r="8" />
            <circle cx="325" cy="285" r="8" />
            <circle cx="250" cy="130" r="12" />
          </g>
        </svg>
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            Descendants of Olukotun Agura · Okorun Quarters, Ikare-Akoko
          </div>
          <h1 className="hero-title fade-up" style={{ animationDelay: '0.05s' }}>
            One family, many generations, a single root.
          </h1>
          <p className="hero-lead fade-up" style={{ animationDelay: '0.12s' }}>
            From a line of warriors and warlords, the Olukotun Agura family has grown into many
            clans spread across Ikare-Akoko, Nigeria and the world. This is our home online — a
            place to know our story, find our people, and keep our heritage alive.
          </p>
          <div className="hero-actions fade-up" style={{ animationDelay: '0.18s' }}>
            <Link to="/history" className="btn-gold">Read our story</Link>
            <Link to="/tree" className="hero-tree-btn">See the family tree</Link>
          </div>
          <div className="flag-bars hero-flag fade-up" style={{ animationDelay: '0.24s' }}>
            <span style={{ background: '#008751' }} />
            <span style={{ background: '#fff' }} />
            <span style={{ background: '#008751' }} />
          </div>
        </div>
        <div className="hero-stats-band">
          <div className="hero-stats-grid">
            <div>
              <div className="hero-stat-num">6</div>
              <div className="hero-stat-label">Family clans</div>
            </div>
            <div>
              <div className="hero-stat-num">5</div>
              <div className="hero-stat-label">Generations</div>
            </div>
            <div>
              <div className="hero-stat-num">1912</div>
              <div className="hero-stat-label">A faith embraced</div>
            </div>
            <div>
              <div className="hero-stat-num">1</div>
              <div className="hero-stat-label">Common ancestor</div>
            </div>
          </div>
        </div>
      </header>

      <section className="who-section">
        <div className="eyebrow">Who we are</div>
        <h2 className="who-title">A warrior's household that became a family of clans</h2>
        <p className="who-body">
          We are the descendants of Olukotun, also called Agura — a courageous warlord of Okorun
          Quarters in Ikare-Akoko. What began as one warrior's household has grown into a family
          of many clans, bound together by courage, resilience and faith. The Olukotun Agura
          Family Foundation exists to keep us united, to preserve our history, and to help one
          another thrive.
        </p>
      </section>

      <section className="gateways-section">
        <div className="gateways-grid">
          <Link to="/history" className="gateway-card">
            <div className="gateway-icon" style={{ background: 'var(--gold-soft)', color: 'var(--gold-deep)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V6a2 2 0 012-2h9l5 5v10M4 19a2 2 0 002 2h12a2 2 0 002-2M9 8h4M9 12h7M9 16h7" />
              </svg>
            </div>
            <h3 className="gateway-title">Our History</h3>
            <p className="gateway-body">From the Oshodi ancestry of Ile-Ife to the warlord Olukotun and the clans of today.</p>
            <span className="gateway-cta">Read the story →</span>
          </Link>

          <Link to="/tree" className="gateway-card">
            <div className="gateway-icon" style={{ background: 'var(--green-050)', color: 'var(--green-600)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="2.4" />
                <circle cx="18" cy="6" r="2.4" />
                <circle cx="12" cy="18" r="2.4" />
                <path d="M6 8.4v3a2 2 0 002 2h8a2 2 0 002-2v-3M12 13.4v2.2" />
              </svg>
            </div>
            <h3 className="gateway-title">The Family Tree</h3>
            <p className="gateway-body">Trace the lineage, generation by generation, and see how every clan connects.</p>
            <span className="gateway-cta">Explore the tree →</span>
          </Link>

          <Link to="/foundation" className="gateway-card">
            <div className="gateway-icon" style={{ background: 'var(--navy-soft)', color: 'var(--navy)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
              </svg>
            </div>
            <h3 className="gateway-title">The Foundation</h3>
            <p className="gateway-body">Our aims, our welfare and empowerment programmes, and how we grow together.</p>
            <span className="gateway-cta">Learn more →</span>
          </Link>

          <Link to="/membership" className="gateway-card">
            <div className="gateway-icon" style={{ background: '#f3e6e6', color: '#a23b3b' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19a5.5 5.5 0 0111 0M16 6.2a3 3 0 010 5.6M17 13.5c2 .6 3.5 2.3 3.5 4.5" />
              </svg>
            </div>
            <h3 className="gateway-title">Become part of it</h3>
            <p className="gateway-body">How family membership works, and how to join the family register.</p>
            <span className="gateway-cta">Join the family →</span>
          </Link>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text">
            From Olukotun the warlord, through Amokele, Obeeje and their descendants, the family
            has remained united by courage, resilience and faith.
          </p>
          <div className="quote-values">
            <div className="quote-value">Unity</div>
            <div className="quote-dot">·</div>
            <div className="quote-value">Welfare</div>
            <div className="quote-dot">·</div>
            <div className="quote-value">Heritage</div>
            <div className="quote-dot">·</div>
            <div className="quote-value">Development</div>
          </div>
        </div>
      </section>
    </div>
  );
}
