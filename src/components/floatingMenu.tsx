import { shallow } from 'zustand/shallow';
import { Send, Share } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '../store';
import { submitPipeline } from '../submit';
import './floatingMenu.css';

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export function FloatingMenu() {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <div className="floating-menu" role="toolbar" aria-label="Workflow actions">
      <Button variant="ghost">
        <Share size={14} aria-hidden="true" />
        Share
      </Button>
      <Button variant="default" onClick={handleSubmit}>
        <Send size={14} aria-hidden="true" />
        Submit
      </Button>
    </div>
  );
}
