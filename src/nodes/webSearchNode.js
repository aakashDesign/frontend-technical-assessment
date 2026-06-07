import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { WebSearchIcon } from '../nodeIcons';
import { useStore } from '../store';

export const WebSearchNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={WebSearchIcon}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-output`, type: 'source', position: Position.Right },
      ]}
    >
      <Input
        label="Search query"
        value={data?.query ?? ''}
        onChange={(e) => updateNodeField(id, 'query', e.target.value)}
        placeholder="Type (( to utilize variables"
      />
    </BaseNode>
  );
};
