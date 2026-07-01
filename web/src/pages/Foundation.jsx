import { objectives, projects } from '../data/content';
import './Foundation.css';

export default function Foundation() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="eyebrow">The Foundation</div>
          <h1 className="page-title">Built to keep the family strong</h1>
          <p className="page-lead" style={{ maxWidth: 620 }}>
            The Olukotun Agura Family Foundation is a platform where matters of interest to a
            member or to the whole family are conceived, planned and carried out for the good of
            all.
          </p>
        </div>
      </div>

      <section className="foundation-section">
        <div className="grid-2">
          <div className="info-card">
            <div className="info-card-title">Who belongs</div>
            <p>
              The Foundation is made up of all progenies male and female whose ancestry can be
              verifiably traced to Olukotun Agura of Okorun Quarters, Ikare-Akoko. Every such
              descendant is automatically a member, expected to play their part and entitled to
              the privileges of the family.
            </p>
          </div>
          <div className="info-card-dark">
            <div className="info-card-title-light">Our aim</div>
            <p className="aim-text">
              To exist as a viable platform where the issues that matter to a member, or to the
              family as a whole, are conceptualised, planned and implemented for the overall
              development of the family.
            </p>
          </div>
        </div>

        <div className="objectives-block">
          <h2 className="h3 objectives-title">Our objectives</h2>
          <div className="grid-2" style={{ marginTop: 24, gap: 14 }}>
            {objectives.map((o) => (
              <div key={o.n} className="objective-card">
                <div className="objective-num">{o.n}</div>
                <div>
                  <h3 className="objective-title">{o.title}</h3>
                  <p className="objective-body">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="empowerment-block">
          <div className="section-heading">
            <div className="eyebrow">Empowerment programmes</div>
            <h2 className="h3" style={{ marginTop: 12 }}>Helping one another rise</h2>
          </div>
          <div className="grid-2 empowerment-grid">
            <div className="empowerment-card">
              <div className="empowerment-icon" style={{ background: 'var(--gold-soft)', color: 'var(--gold-deep)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
                </svg>
              </div>
              <h3 className="empowerment-title">Educational support</h3>
              <p className="empowerment-body">
                Assistance with training and education costs for eligible family members — so that
                no child of the family is held back for want of school fees.
              </p>
            </div>
            <div className="empowerment-card">
              <div className="empowerment-icon" style={{ background: 'var(--green-050)', color: 'var(--green-700)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                </svg>
              </div>
              <h3 className="empowerment-title">Business expansion</h3>
              <p className="empowerment-body">
                Support for growing family businesses — additional working capital, machinery, and
                the means to expand and employ.
              </p>
            </div>
          </div>
          <div className="empowerment-note">
            At inception these programmes are restricted to verified family members, who are
            properly assessed before support is given. As the family purse grows, they may be
            extended to the wider community and the less privileged.
          </div>
        </div>

        <div className="grid-2 projects-funding-grid">
          <div className="info-card">
            <h3 className="projects-card-title">Family projects</h3>
            <p className="projects-card-sub">As the Foundation grows, we hope to take on:</p>
            <div className="projects-list">
              {projects.map((p) => (
                <div key={p} className="project-item">
                  <span className="project-check">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="funding-card">
            <h3>Funding &amp; the family purse</h3>
            <p>
              The Foundation is built on a shared purse, raised through voluntary contributions
              from all members and supported by donations from friends. This capital is invested,
              and its proceeds fund the empowerment programmes over time. A base amount is always
              preserved, and where urgent needs arise, additional support can be raised to meet
              them.
            </p>
          </div>
        </div>

        <div className="governance-card">
          <h3>Governance</h3>
          <p>
            The Foundation is to be properly registered as an NGO, guided by a board that pilots
            its affairs. The board is chaired by the family Olori-ebi (head) usually the eldest,
            or a chairman nominated by the elders supported by a vice-chairman, with two members
            appointed from each family clan and ratified by the family head and the general
            meeting.
          </p>
        </div>
      </section>
    </div>
  );
}
