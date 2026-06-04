// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [type, setType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      handles={[
        { id: `${id}-value`, type: 'source', position: Position.Right }
      ]}
    >
      <div>
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
      </div>
      <div>
        <label>Type: <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select></label>
      </div>
    </BaseNode>
  );
}
