// textNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Textarea } from '../components/ui/textarea';
import { TextIcon } from '../nodeIcons';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={TextIcon}
      handles={[
        { id: `${id}-output`, type: 'source', position: Position.Right }
      ]}
    >
      <Textarea
        label="Text"
        value={data?.text ?? '{{input}}'}
        onChange={(e) => updateNodeField(id, 'text', e.target.value)}
        placeholder="Type (( to utilize variables"
        rows={3}
      />
    </BaseNode>
  );
};
