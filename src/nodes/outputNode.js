// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [type, setType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      handles={[
        { id: `${id}-value`, type: 'target', position: Position.Left }
      ]}
    >
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    
    </BaseNode>
  );
}
