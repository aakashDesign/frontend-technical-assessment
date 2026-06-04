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
        { id: `${id}-value`, type: 'source', position: Position.Right },
      ]}
    >
      <div>
        <label>Name: <input type="text" value={name} onChange={setName} /></label>
      </div>
      <div>
        <label>Type: <select value={type} onChange={setType}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select></label>
      </div>
    </BaseNode>
  );
}

/*
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
    */