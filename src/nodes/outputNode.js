// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';

const OUTPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'Image', label: 'Image' },
];

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      handles={[
        { id: `${id}-value`, type: 'target', position: Position.Left }
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
        options={OUTPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
