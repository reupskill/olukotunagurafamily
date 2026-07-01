const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function TreeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M6 8.4v3a2 2 0 002 2h8a2 2 0 002-2v-3M12 13.4v2.2" />
    </svg>
  );
}

export function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <path d="M12 22V12M12 12L7 8M12 12l5-4M12 8V3" />
      <circle cx="12" cy="3" r="1.6" />
      <circle cx="7" cy="8" r="1.6" />
      <circle cx="17" cy="8" r="1.6" />
    </svg>
  );
}

export function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0111 0M16 6.2a3 3 0 010 5.6M17 13.5c2 .6 3.5 2.3 3.5 4.5" />
    </svg>
  );
}

export function CakeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <path d="M5 21V12.5a2 2 0 012-2h10a2 2 0 012 2V21zM4 21h16M12 10.5V7M12 7a1.7 1.7 0 11-1.5-2.5C11 3.5 12 2.5 12 2.5s1 1 1.5 2C14 5.5 13 7 12 7z" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}

export function PurseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" {...common} {...props}>
      <path d="M11 13l-2-1.8a2.3 2.3 0 113.2-3.2l.8.8.8-.8A2.3 2.3 0 0117 11" />
      <rect x="3" y="12" width="18" height="8" rx="2" />
    </svg>
  );
}

export const iconMap = {
  tree: TreeIcon,
  link: LinkIcon,
  people: PeopleIcon,
  cake: CakeIcon,
  heart: HeartIcon,
  purse: PurseIcon,
};

export function BrandMark({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" stroke="var(--gold)" strokeWidth="2" />
      <path d="M24 39 V21" stroke="var(--green-700)" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 25 16 18 M24 26 32 19 M24 22 24 13"
        stroke="var(--green-700)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="12" r="4" fill="#74c69d" />
      <circle cx="15" cy="17" r="3.4" fill="#40916c" />
      <circle cx="33" cy="19" r="3.4" fill="#40916c" />
    </svg>
  );
}

export function BrandMarkFooter({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" stroke="#c79a3a" strokeWidth="2" />
      <path d="M24 39 V21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="12" r="4" fill="#74c69d" />
      <circle cx="15" cy="17" r="3.4" fill="#40916c" />
      <circle cx="33" cy="19" r="3.4" fill="#40916c" />
    </svg>
  );
}
