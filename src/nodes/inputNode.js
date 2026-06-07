// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';

const INPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' },
];

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      handles={[
        { id: `${id}-value`, type: 'source', position: Position.Right }
      ]}
    >
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        label="Type"
        value={type}
        onValueChange={setType}
        options={INPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
