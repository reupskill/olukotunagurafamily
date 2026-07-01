import { useState } from 'react';
import {
  treePeople,
  treeParent,
  outlineOrder,
  treeById,
  pathToRoot,
  depthOf,
} from '../data/treeData';
import SignInButton from '../components/SignInButton';
import './FamilyTree.css';

const NW = 152;
const NH = 48;

export default function FamilyTree() {
  const [selected, setSelected] = useState('olukotun');
  const [popupOpen, setPopupOpen] = useState(false);

  const path = pathToRoot(selected);
  const selNode = treeById[selected] || treePeople[0];

  const selectNode = (id) => {
    setSelected(id);
    setPopupOpen(true);
  };

  const links = Object.keys(treeParent).map((childId) => {
    const c = treeById[childId];
    const p = treeById[treeParent[childId]];
    const px = p.x + NW;
    const py = p.y + NH / 2;
    const cx = c.x;
    const cy = c.y + NH / 2;
    const mx = (px + cx) / 2;
    const active = path.has(childId);
    return {
      id: childId,
      d: `M${px},${py} C${mx},${py} ${mx},${cy} ${cx},${cy}`,
      stroke: active ? '#c79a3a' : '#cdbf9f',
      op: active ? 1 : 0.5,
    };
  });

  return (
    <div>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="eyebrow">The family tree</div>
          <h1 className="page-title">One tree, from a warlord to today</h1>
          <p className="page-lead">
            Trace the lineage from the Oshodi ancestry and Olukotun the warlord down to the family
            clans of today. <b style={{ color: '#fff' }}>Tap any name</b> to follow its path back
            to the root.
          </p>
        </div>
      </div>

      <section className="tree-section">
        {/* Desktop: graph + side panel */}
        <div className="tree-desktop">
          <div className="tree-canvas-wrap">
            <div className="tree-canvas-scroll">
              <div className="tree-canvas">
                <svg className="tree-links" fill="none">
                  {links.map((lk) => (
                    <path key={lk.id} d={lk.d} stroke={lk.stroke} strokeWidth="2.4" fill="none" opacity={lk.op} />
                  ))}
                </svg>
                {treePeople.map((p) => {
                  const isSel = p.id === selected;
                  const inPath = path.has(p.id) && !isSel;
                  const border = isSel
                    ? `2.5px solid ${p.color}`
                    : inPath
                    ? `2px solid ${p.color}`
                    : `1.5px solid ${p.color}55`;
                  const shadow = isSel
                    ? '0 10px 26px rgba(16,49,31,0.20)'
                    : inPath
                    ? '0 4px 14px rgba(199,154,58,0.22)'
                    : '0 1px 3px rgba(0,0,0,0.05)';
                  const bg = inPath ? '#fffdf6' : '#fff';
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelected(p.id)}
                      className="tree-node"
                      style={{
                        left: p.x,
                        top: p.y,
                        background: bg,
                        border,
                        boxShadow: shadow,
                        transform: isSel ? 'translateY(-2px)' : 'none',
                      }}
                    >
                      <span className="tree-node-name" style={{ color: p.color }}>{p.name}</span>
                      <span className="tree-node-sub">{p.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="tree-legend">
              <div className="tree-legend-item">
                <span className="tree-legend-swatch-line" />
                Highlighted lineage path
              </div>
              <div className="tree-legend-item">
                <span className="tree-legend-swatch-box" style={{ border: '2px solid #1f5138' }} />
                Ancestors &amp; warriors
              </div>
              <div className="tree-legend-item">
                <span className="tree-legend-swatch-box" style={{ border: '2px solid #1f6f54' }} />
                Living family clans
              </div>
            </div>
          </div>

          <div className="tree-side-panel">
            <div className="tree-panel-sub" style={{ color: selNode.color }}>{selNode.sub}</div>
            <h3 className="tree-panel-name">{selNode.name}</h3>
            <div className="tree-panel-gen">
              <span className="tree-panel-gen-dot" style={{ background: selNode.color }} />
              <span className="tree-panel-gen-label">{selNode.gen}</span>
            </div>
            <p className="tree-panel-story">{selNode.story}</p>
            <div className="tree-panel-descendants">
              <div className="tree-panel-descendants-label">Descendants</div>
              <div className="tree-panel-descendants-value">{selNode.children}</div>
            </div>
            <SignInButton className="tree-panel-link">Explore the full member tree →</SignInButton>
          </div>
        </div>

        {/* Mobile/tablet: vertical outline */}
        <div className="tree-mobile">
          <div className="tree-outline-hint">Tap a name to read their story</div>
          {outlineOrder.map((id) => {
            const p = treeById[id];
            const depth = depthOf(id);
            const isSel = id === selected;
            return (
              <button
                key={id}
                onClick={() => selectNode(id)}
                className={`tree-outline-row${isSel ? ' selected' : ''}`}
                style={{
                  width: `calc(100% - ${depth * 15}px)`,
                  marginLeft: depth * 15,
                  borderColor: isSel ? p.color : undefined,
                  borderLeft: `4px solid ${p.color}`,
                }}
              >
                <span className="tree-outline-dot" style={{ background: p.color }} />
                <span className="tree-outline-text">
                  <span className="tree-outline-name">{p.name}</span>
                  <span className="tree-outline-sub">{p.sub}</span>
                </span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#b9c2b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            );
          })}
          <div className="tree-outline-footnote">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 4v10a4 4 0 004 4h4M8 4H5m3 0h3" />
            </svg>
            Each step of indentation is one generation.
          </div>
        </div>

        {/* Bottom sheet popup, mobile/tablet only */}
        {popupOpen && (
          <div className="tree-popup-overlay" onClick={() => setPopupOpen(false)}>
            <div className="tree-popup-sheet" onClick={(e) => e.stopPropagation()}>
              <div className="tree-popup-handle-row">
                <span className="tree-popup-handle" />
              </div>
              <div className="tree-popup-top">
                <div className="tree-panel-sub" style={{ color: selNode.color, paddingTop: 3 }}>{selNode.sub}</div>
                <button className="tree-popup-close" onClick={() => setPopupOpen(false)} aria-label="Close">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <h3 className="tree-popup-name">{selNode.name}</h3>
              <div className="tree-panel-gen">
                <span className="tree-panel-gen-dot" style={{ background: selNode.color }} />
                <span className="tree-panel-gen-label">{selNode.gen}</span>
              </div>
              <p className="tree-panel-story" style={{ fontSize: 15 }}>{selNode.story}</p>
              <div className="tree-panel-descendants">
                <div className="tree-panel-descendants-label">Descendants</div>
                <div className="tree-panel-descendants-value" style={{ fontSize: 15 }}>{selNode.children}</div>
              </div>
              <SignInButton className="tree-panel-link">Explore the full member tree →</SignInButton>
            </div>
          </div>
        )}

        <p className="tree-note">
          The six living clans — Babajide, Olorunfemi, Olanipekun, Bankole, Asaya and Adegbola —
          each hold many families. The complete tree of individual members lives inside the
          private family portal.
        </p>
      </section>
    </div>
  );
}
