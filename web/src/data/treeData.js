export const treePeople = [
  {
    id: 'oshodi',
    name: 'Oshodi',
    sub: 'ANCESTRAL HIGH CHIEF',
    gen: 'The Oshodi line',
    color: '#7a5a2e',
    x: 8,
    y: 300,
    story:
      'One of the high chiefs who followed the Owa-Ale from Enu-Owa Quarters in Ile-Ife to establish Ikare land. The Oshodi line — Tunolase, Olukotun, Opa and Agbari — begins here.',
    children: 'Olukotun and the Oshodi line',
  },
  {
    id: 'olukotun',
    name: 'Olukotun (Agura)',
    sub: 'THE WARLORD · GENERALISSIMO',
    gen: '1st generation',
    color: '#c79a3a',
    x: 176,
    y: 300,
    story:
      'As the family served as Generalissimo — responsible for the security of Ikare — Olukotun distinguished himself as a courageous and formidable warlord, always ready to confront invaders and protect his people.',
    children: 'Amokele',
  },
  {
    id: 'amokele',
    name: 'Amokele',
    sub: 'THE MOUNTAIN DEFENDER',
    gen: '2nd generation',
    color: '#1f5138',
    x: 346,
    y: 318,
    story:
      'His praise-name means "the one who makes the mountain hard to breach." Through the Yoruba wars and the slave-raid era he led the defence of the mountain settlements, posting scouts and guards to keep Ikare secure — though many of his warrior sons fell in battle.',
    children: 'Obeeje, Apobiruesin',
  },
  {
    id: 'obeeje',
    name: 'Obeeje',
    sub: 'THE FEARED WARRIOR',
    gen: '3rd generation',
    color: '#b5651d',
    x: 518,
    y: 236,
    story:
      'So great was his fame that the whole family became popularly known as the Obeeje Family. Remembered in the proverb "Obeje, abeno mo omode o ju." He fathered Olorunduyi and Odubado.',
    children: 'Olorunduyi, Odubado',
  },
  {
    id: 'apobiruesin',
    name: 'Apobiruesin',
    sub: 'FEARLESS WARRIOR',
    gen: '3rd generation',
    color: '#7c5295',
    x: 518,
    y: 548,
    story:
      'A son of Amokele who, alongside his brother Obeeje, preserved the warrior tradition of the family in his time.',
    children: '—',
  },
  {
    id: 'olorunduyi',
    name: 'Olorunduyi',
    sub: 'DANIEL-OLIKU · BAPTISED 1912',
    gen: '4th generation',
    color: '#2f6f8f',
    x: 696,
    y: 120,
    story:
      'On 15 May 1912 he was baptised Daniel Olorunduyi by Rev. H. F. Gane of the CMS Church, Ikare — a turning point that blended the family’s warrior heritage with a new Christian faith. He remained a respected hunter and warrior all his life.',
    children: 'Babajide, Olorunfemi, Olanipekun',
  },
  {
    id: 'odubado',
    name: 'Odubado',
    sub: 'ELDER OF THE LINE',
    gen: '4th generation',
    color: '#a23b3b',
    x: 696,
    y: 384,
    story:
      'Son of Obeeje and ancestor of three of the family’s living clans — Bankole, Asaya and Adegbola.',
    children: 'Bankole, Asaya, Adegbola',
  },
  {
    id: 'babajide',
    name: 'Babajide',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#1f6f54',
    x: 880,
    y: 44,
    story:
      'A clan of the Olorunduyi line, known today for its educators and professionals at home and across the diaspora.',
    children: 'A living family clan',
  },
  {
    id: 'olorunfemi',
    name: 'Olorunfemi',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#c98a1e',
    x: 880,
    y: 112,
    story: 'A clan of the Olorunduyi line — home to lawyers, doctors, engineers and entrepreneurs.',
    children: 'A living family clan',
  },
  {
    id: 'olanipekun',
    name: 'Olanipekun',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#486fb0',
    x: 880,
    y: 180,
    story: 'A widely dispersed clan of the Olorunduyi line with strong academic roots.',
    children: 'A living family clan',
  },
  {
    id: 'bankole',
    name: 'Bankole',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#6a8f3c',
    x: 880,
    y: 308,
    story: 'A clan of the Odubado line with deep roots in trade and farming around Ikare-Akoko.',
    children: 'A living family clan',
  },
  {
    id: 'asaya',
    name: 'Asaya',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#8a5a8f',
    x: 880,
    y: 376,
    story: 'A close-knit clan of the Odubado line.',
    children: 'A living family clan',
  },
  {
    id: 'adegbola',
    name: 'Adegbola',
    sub: 'FAMILY CLAN',
    gen: '5th generation',
    color: '#3f8f8f',
    x: 880,
    y: 444,
    story: 'The youngest documented clan of the Odubado line, still being carefully mapped.',
    children: 'A living family clan',
  },
];

export const treeParent = {
  olukotun: 'oshodi',
  amokele: 'olukotun',
  obeeje: 'amokele',
  apobiruesin: 'amokele',
  olorunduyi: 'obeeje',
  odubado: 'obeeje',
  babajide: 'olorunduyi',
  olorunfemi: 'olorunduyi',
  olanipekun: 'olorunduyi',
  bankole: 'odubado',
  asaya: 'odubado',
  adegbola: 'odubado',
};

export const outlineOrder = [
  'oshodi',
  'olukotun',
  'amokele',
  'obeeje',
  'olorunduyi',
  'babajide',
  'olorunfemi',
  'olanipekun',
  'odubado',
  'bankole',
  'asaya',
  'adegbola',
  'apobiruesin',
];

export const treeById = Object.fromEntries(treePeople.map((p) => [p.id, p]));

export function pathToRoot(id) {
  const path = new Set([id]);
  let cur = id;
  while (treeParent[cur]) {
    cur = treeParent[cur];
    path.add(cur);
  }
  return path;
}

export function depthOf(id) {
  let d = 0;
  let cur = id;
  while (treeParent[cur]) {
    cur = treeParent[cur];
    d++;
  }
  return d;
}
