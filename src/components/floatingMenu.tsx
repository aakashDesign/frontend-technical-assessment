import { Button } from './ui/button';
import './floatingMenu.css';

const ShareIcon = () => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
    <path
      d="M7 1.5v7.25M4.25 4.25 7 1.5l2.75 2.75M2.5 8.75v2.25a1.25 1.25 0 0 0 1.25 1.25h6.5a1.25 1.25 0 0 0 1.25-1.25V8.75"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
    <path
      d="M4 2.25 11 7l-7 4.75V2.25Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export function FloatingMenu() {
  return (
    <div className="floating-menu" role="toolbar" aria-label="Workflow actions">
      <Button variant="ghost">
        <ShareIcon />
        Share
      </Button>
      <Button variant="default">
        <PlayIcon />
        Run
      </Button>
    </div>
  );
}
