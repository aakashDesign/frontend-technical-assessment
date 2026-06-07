import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { CronIcon } from '../nodeIcons';
import { useStore } from '../store';

const CRON_TYPE_OPTIONS = [
  { value: 'Daily', label: 'Daily' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Custom', label: 'Custom' },
];

export const CronNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={CronIcon}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-output`, type: 'source', position: Position.Right },
      ]}
    >
      <Select
        label="Type"
        value={data?.cronType ?? 'Daily'}
        onValueChange={(v) => updateNodeField(id, 'cronType', v)}
        options={CRON_TYPE_OPTIONS}
      />
      <Input
        label="Time"
        value={data?.time ?? '9:00 am'}
        onChange={(e) => updateNodeField(id, 'time', e.target.value)}
        placeholder="9:00 am"
      />
    </BaseNode>
  );
};
