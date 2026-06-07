// inputNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { InputIcon } from '../nodeIcons';
import { useStore } from '../store';

const INPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' },
];

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

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
        value={data?.inputType ?? 'Text'}
        onValueChange={(v) => updateNodeField(id, 'inputType', v)}
        options={INPUT_TYPE_OPTIONS}
      />
    </BaseNode>
  );
};
