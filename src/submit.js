// submit.js

import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8000';

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await fetch(`${BACKEND_URL}/pipelines/parse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const { num_nodes, num_edges, is_dag } = await response.json();

    const nodeLabel = `${num_nodes} ${num_nodes === 1 ? 'node' : 'nodes'}`;
    const edgeLabel = `${num_edges} ${num_edges === 1 ? 'connection' : 'connections'}`;

    if (is_dag) {
      toast.success('Pipeline ready', {
        description: `${nodeLabel}, ${edgeLabel}`,
      });
    } else {
      toast.error('Loop detected', {
        description: 'Fix circular connections before running.',
      });
    }
  } catch (error) {
    toast.error('Failed to submit pipeline', {
      description: error.message,
    });
  }
};
