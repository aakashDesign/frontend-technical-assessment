import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { DatabaseIcon } from '../nodeIcons';
import { useStore } from '../store';

const DATABASE_TYPE_OPTIONS = [
  { value: 'SQL', label: 'SQL' },
  { value: 'NoSQL', label: 'NoSQL' },
];

export const DatabaseNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={DatabaseIcon}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-output`, type: 'source', position: Position.Right },
      ]}
    >
      <Select
        label="Type"
        value={data?.dbType ?? 'SQL'}
        onValueChange={(v) => updateNodeField(id, 'dbType', v)}
        options={DATABASE_TYPE_OPTIONS}
      />
      <div className="base-node__field">
        <label className="base-node__field-label">Query</label>
        <div className="base-node__field-control">
          <textarea
            className="base-node__textarea nodrag nopan"
            value={data?.query ?? ''}
            onChange={(e) => updateNodeField(id, 'query', e.target.value)}
            placeholder="Type (( to utilize variables"
            rows={3}
          />
        </div>
      </div>
    </BaseNode>
  );
};
