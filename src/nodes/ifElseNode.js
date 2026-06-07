import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { IfElseIcon } from '../nodeIcons';
import { useStore } from '../store';

const CONDITION_OPTIONS = [
  { value: '=', label: '=' },
  { value: '!=', label: '!=' },
  { value: '>', label: '>' },
  { value: '<', label: '<' },
  { value: '>=', label: '>=' },
  { value: '<=', label: '<=' },
];

export const IfElseNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={IfElseIcon}
      headerLabels={['If', 'Else']}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-if`, type: 'source', position: Position.Right, style: { top: 48 } },
        { id: `${id}-else`, type: 'source', position: Position.Right, style: { top: 74 } },
      ]}
    >
      <Input
        label="If"
        value={data?.ifValue ?? ''}
        onChange={(e) => updateNodeField(id, 'ifValue', e.target.value)}
        placeholder="Type (( to utilize variables"
      />
      <Select
        label="Condition"
        value={data?.condition ?? '='}
        onValueChange={(v) => updateNodeField(id, 'condition', v)}
        options={CONDITION_OPTIONS}
      />
      <Input
        label="Then"
        value={data?.thenValue ?? ''}
        onChange={(e) => updateNodeField(id, 'thenValue', e.target.value)}
        placeholder="Type (( to utilize variables"
      />
      <Input
        label="Else"
        value={data?.elseValue ?? ''}
        onChange={(e) => updateNodeField(id, 'elseValue', e.target.value)}
        placeholder="Type (( to utilize variables"
      />
    </BaseNode>
  );
};
