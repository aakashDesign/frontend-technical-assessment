// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      handles={[
        { id: `${id}-output`, type: 'source', position: Position.Right }
      ]}
    >
      <Input
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type (( to utilize variables"
      />
    </BaseNode>
  );
};
