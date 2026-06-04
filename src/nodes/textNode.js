// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');


  return (
   <BaseNode
    title="Text"
    handles={[
      { id: `${id}-output`, type: 'source', position: Position.Right }
    ]}
    >
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
}
