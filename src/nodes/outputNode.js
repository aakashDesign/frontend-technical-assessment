// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { OutputIcon } from '../nodeIcons';

const OUTPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'Image', label: 'Image' },
];

export const OutputNode = ({ id, data }) => {
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={OutputIcon}
      handles={[
        { id: `${id}-value`, type: 'target', position: Position.Left }
      ]}
    >
      <Select
        label="Type"
        value={type}
        onValueChange={setType}
        options={OUTPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
