import { features } from '../data/content';
import { iconMap } from '../components/Icons';
import SignInButton from '../components/SignInButton';
import './Membership.css';

const steps = [
  {
    n: 1,
    title: 'Your clan verifies you',
    body: 'A clan head or branch admin confirms your lineage and where you sit in the family tree.',
  },
  {
    n: 2,
    title: 'You join the register',
    body: 'Once approved, you are added to the family register and take your place on the living tree.',
  },
  {
    n: 3,
    title: 'You gain the portal',
    body: 'Access the private member portal — the directory, the tree, celebrations, welfare and more.',
  },
];

export default function Membership() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="eyebrow">Membership</div>
          <h1 className="page-title">You already belong</h1>
          <p className="page-lead">
            If your ancestry can be traced to Olukotun Agura of Okorun Quarters, Ikare-Akoko, you
            are already family — at home or in the diaspora, male or female, of every generation.
          </p>
        </div>
      </div>

      <section className="membership-section">
        <h2 className="h3 steps-heading">How joining the register works</h2>
        <div className="grid-3" style={{ marginTop: 24 }}>
          {steps.map((s) => (
            <div key={s.n} className="step-card">
              <div className="step-num">{s.n}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="features-heading">
          <div className="eyebrow">Inside the portal</div>
          <h2 className="h3" style={{ marginTop: 12 }}>What members can do</h2>
        </div>
        <div className="grid-3" style={{ marginTop: 24 }}>
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" style={{ background: f.bg, color: f.fg }}>
                  <Icon />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
              </div>
            );
          })}
        </div>

        <div className="grid-2 cta-grid">
          <div className="cta-member">
            <h3>Already a member?</h3>
            <p>
              Sign in to your portal to reach your relatives, celebrate together, and keep your
              record up to date.
            </p>
            <SignInButton className="cta-signin" />
          </div>
          <div className="cta-new">
            <h3>New to the register?</h3>
            <p>
              Reach out to your clan head, or contact the Foundation Secretariat and we will help
              connect you to your branch.
            </p>
            <div className="cta-contact-list">
              <div className="cta-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="M4 7l8 5 8-5" />
                </svg>
                secretariat@olukotunagura.ng
              </div>
              <div className="cta-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.2-7-10a7 7 0 0114 0c0 4.8-7 10-7 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                Foundation Secretariat, Ikare-Akoko, Ondo State
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
