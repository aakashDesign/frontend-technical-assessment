// nodeIcons.js
// Inline SVG icons for sidebar node items.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const InputIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <rect x="6.5" y="2.5" width="7" height="11" rx="1.5" />
    <path d="M2 8h6.5" />
    <path d="M5.5 5.5 8.5 8 5.5 10.5" />
  </svg>
);

export const OutputIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <rect x="2.5" y="2.5" width="7" height="11" rx="1.5" />
    <path d="M14 8H7.5" />
    <path d="M10.5 5.5 13.5 8l-3 2.5" />
  </svg>
);

export const EndpointIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <circle cx="8" cy="8" r="5.5" />
    <path d="M2.5 8h11" />
    <path d="M8 2.5c1.7 1.6 2.5 3.5 2.5 5.5S9.7 12.4 8 14c-1.7-1.6-2.5-3.5-2.5-5.5S6.3 4.1 8 2.5z" />
  </svg>
);

export const TextIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <path d="M3 4.5V3h10v1.5" />
    <path d="M8 3v10" />
    <path d="M6 13h4" />
  </svg>
);

export const ModelIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <path d="m5 2 .8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2z" />
    <path d="m11 7 .6 1.7 1.7.6-1.7.6L11 12l-.6-1.7L8.7 9.7 10.4 9 11 7z" />
  </svg>
);

export const IfElseIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <circle cx="3" cy="3.5" r="1.25" />
    <circle cx="3" cy="12.5" r="1.25" />
    <circle cx="13" cy="8" r="1.25" />
    <path d="M3 4.75v6.5" />
    <path d="M4.25 3.5h4.25c1.5 0 3 1 3.5 4" />
    <path d="M4.25 12.5h4.25c1.5 0 3-1 3.5-4" />
  </svg>
);

export const DatabaseIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <ellipse cx="8" cy="4" rx="5" ry="1.75" />
    <path d="M3 4v8c0 1 2.2 1.75 5 1.75s5-.75 5-1.75V4" />
    <path d="M3 8c0 1 2.2 1.75 5 1.75s5-.75 5-1.75" />
  </svg>
);

export const WebSearchIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <circle cx="7" cy="7" r="4.25" />
    <path d="m10.25 10.25 3 3" />
    <path d="M3 7c1 1.5 7 1.5 8 0" />
    <path d="M7 2.75c-1.5 1-1.5 7 0 8.5" />
    <path d="M7 2.75c1.5 1 1.5 7 0 8.5" />
  </svg>
);

export const CronIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <path d="M5.5 1.75v1.5" />
    <path d="M10.5 1.75v1.5" />
    <circle cx="8" cy="9" r="5" />
    <path d="M8 6.5V9l1.75 1.25" />
  </svg>
);

export const WorkflowIcon = () => (
  <svg viewBox="0 0 16 16" {...stroke}>
    <rect x="1.75" y="1.75" width="5" height="5" rx="0.75" />
    <rect x="9.25" y="9.25" width="5" height="5" rx="0.75" />
    <path d="M6.75 4.25h3.5c.85 0 1.5.65 1.5 1.5v3.5" />
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 12 12" {...stroke}>
    <circle cx="5.25" cy="5.25" r="3.25" />
    <path d="m7.75 7.75 2 2" />
  </svg>
);

export const ChevronDownIcon = () => (
  <svg viewBox="0 0 12 12" {...stroke}>
    <path d="m3 4.5 3 3 3-3" />
  </svg>
);
