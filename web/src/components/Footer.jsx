import { Link, useNavigate } from 'react-router-dom';
import { BrandMarkFooter } from './Icons';
import SignInButton from './SignInButton';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const backToTop = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <BrandMarkFooter />
              <div className="footer-brand-text">
                <div className="footer-brand-name">Olukotun Agura</div>
                <div className="footer-brand-sub">FAMILY FOUNDATION</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              United by our heritage, stronger for our future. Preserving the lineage of Olukotun
              Agura of Okorun Quarters, Ikare-Akoko.
            </p>
            <div className="flag-bars" style={{ marginTop: 18 }}>
              <span style={{ width: 34, background: '#008751' }} />
              <span style={{ width: 34, background: '#fff' }} />
              <span style={{ width: 34, background: '#008751' }} />
            </div>
          </div>

          <div>
            <div className="footer-heading">Explore</div>
            <div className="footer-links">
              <Link className="footer-link" to="/">Home</Link>
              <Link className="footer-link" to="/history">Our History</Link>
              <Link className="footer-link" to="/tree">Family Tree</Link>
              <Link className="footer-link" to="/foundation">The Foundation</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Members</div>
            <div className="footer-links">
              <Link className="footer-link" to="/membership">Membership</Link>
              <SignInButton className="footer-link">Sign in</SignInButton>
              <SignInButton className="footer-link">The portal</SignInButton>
            </div>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-contact">
              <div>Foundation Secretariat</div>
              <div>Ikare-Akoko, Ondo State</div>
              <div>secretariat@olukotunagura.ng</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Olukotun Agura Family Foundation.</div>
          <button onClick={backToTop}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
