import { Link } from 'react-router-dom';
import { rememberedNames } from '../data/content';
import './History.css';

const chapters = [
  {
    n: '01 · Origins',
    title: 'From Ile-Ife to Ikare',
    body: 'Our lineage is traced to the ancestral Oshodi family of Okorun, Ikare-Akoko. Oshodi was one of the high chiefs who followed the Owa-Ale from Enu-Owa Quarters in Ile-Ife to establish Ikare land. From that Oshodi line — Tunolase, Olukotun, Opa and Agbari — our family descends.',
  },
  {
    n: '02 · The warlord',
    title: 'Olukotun, the Generalissimo',
    body: 'During the migration and settlement, the Olukotun family served as the Generalissimo — responsible for the security of the people. In that role, Olukotun distinguished himself as a courageous and formidable warlord, always ready to confront invaders and protect Ikare. It is from him that our family takes its name, and its enduring spirit of courage.',
  },
  {
    n: '03 · The mountain defender',
    title: 'Amokele and the defence of the mountains',
    body: 'Olukotun\'s bravery was inherited by his son, whose gallantry earned him the praise-name Amokele — "the one who makes the mountain hard to breach." In the era of slave raids, when the people of Ikare took refuge in the mountains where horsemen could not easily follow, Amokele was charged with defending the settlements. He posted scouts and guards at strategic points, keeping Ikare secure through the internecine Yoruba wars and the height of the slave trade.',
    callout:
      "Victory came at a cost. Despite triumphs over Nupe, Ekiti, Oyo and slave merchants, many of Amokele's sons — trained as warriors in his household — were killed or captured in battle. The Nupe invasions, in particular, left a heavy toll on the Olukotun warrior clan.",
  },
  {
    n: '04 · The Obeeje legacy',
    title: 'The family known by his name',
    body: "As the family multiplied and spread, its identity remained rooted in Olukotun. Among Amokele's sons, Obeeje and Apobiruesin stood out as fearless warriors. So great was Obeeje's fame that the whole family became popularly known as the Obeeje Family.",
    proverb: {
      text: '"Obeje, abeno mo omode o ju"',
      cite: '— a proverb remembering his feared reputation in his time.',
    },
    after:
      'Obeeje fathered Olorunduyi and Odubado. Olorunduyi in turn had Babajide, Olorunfemi and Olanipekun; Odubado had Bankole, Asaya and Adegbola — the clans that make up the family today.',
  },
  {
    n: '05 · A new faith',
    title: 'From warriorhood to Christianity',
    body: 'With the decline of the wars and the arrival of Christianity in Ikare, the family began to embrace a new identity. Olorunduyi, a descendant of Obeeje, accepted the Christian faith and, on 15 May 1912, was baptised Daniel Olorunduyi by Rev. H. F. Gane of the CMS Church, Ikare. Though a committed Christian, he remained a respected hunter and warrior — a turning point that blended the family\'s proud heritage with a new spiritual legacy.',
  },
  {
    n: '06 · Today',
    title: 'One family, still thriving',
    body: 'From Olukotun the warlord, through Amokele, Obeeje and their descendants, the family has remained united by courage, resilience and faith. Today, the Olukotun (Agura) family of Okorun, Ikare-Akoko continues to thrive — bound together in love, and guided by the memory of our fearless ancestors.',
  },
];

export default function History() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="eyebrow">Our story</div>
          <h1 className="page-title">A history written in courage</h1>
          <p className="page-lead">
            The Olukotun (Agura) family of Okorun, Ikare-Akoko carries a story that stretches back
            generations — from the founding of Ikare land, to the warriors who defended it, to the
            faith that shaped the family we are today.
          </p>
        </div>
      </div>

      <section className="history-section">
        <div className="chapters">
          {chapters.map((c) => (
            <div key={c.n}>
              <div className="chapter-num">{c.n}</div>
              <h2 className="chapter-title">{c.title}</h2>
              <p className="chapter-body">{c.body}</p>
              {c.callout && <div className="chapter-callout">{c.callout}</div>}
              {c.proverb && (
                <div className="chapter-proverb">
                  <div className="chapter-proverb-text">{c.proverb.text}</div>
                  <div className="chapter-proverb-cite">{c.proverb.cite}</div>
                </div>
              )}
              {c.after && <p className="chapter-body">{c.after}</p>}
            </div>
          ))}
        </div>

        <div className="names-box">
          <div className="names-box-title">Names remembered in the Olukotun line</div>
          <div className="names-list">
            {rememberedNames.map((nm) => (
              <span key={nm} className="name-pill">{nm}</span>
            ))}
          </div>
        </div>

        <div className="history-cta">
          <Link to="/tree" className="btn-green" style={{ border: 'none' }}>
            See how everyone connects →
          </Link>
        </div>
      </section>
    </div>
  );
}
