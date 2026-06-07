import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { EndpointIcon } from '../nodeIcons';
import { useStore } from '../store';

const METHOD_OPTIONS = [
  { value: 'Get', label: 'Get' },
  { value: 'Post', label: 'Post' },
  { value: 'Put', label: 'Put' },
  { value: 'Patch', label: 'Patch' },
  { value: 'Delete', label: 'Delete' },
];

export const EndpointNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={EndpointIcon}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-output`, type: 'source', position: Position.Right },
      ]}
    >
      <Select
        label="Method"
        value={data?.method ?? 'Get'}
        onValueChange={(v) => updateNodeField(id, 'method', v)}
        options={METHOD_OPTIONS}
      />
      <Input
        label="URL"
        value={data?.url ?? ''}
        onChange={(e) => updateNodeField(id, 'url', e.target.value)}
        placeholder="www.api.com"
      />
    </BaseNode>
  );
};
