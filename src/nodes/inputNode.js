// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { InputIcon } from '../nodeIcons';

const INPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' },
];

export const InputNode = ({ id, data }) => {
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={InputIcon}
      handles={[
        { id: `${id}-value`, type: 'source', position: Position.Right }
      ]}
    >
      <Select
        label="Type"
        value={type}
        onValueChange={setType}
        options={INPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
