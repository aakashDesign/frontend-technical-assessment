// outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { OutputIcon } from '../nodeIcons';
import { useStore } from '../store';

const OUTPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'Image', label: 'Image' },
];

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

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
        value={data?.outputType ?? 'Text'}
        onValueChange={(v) => updateNodeField(id, 'outputType', v)}
        options={OUTPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
