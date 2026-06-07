import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Select } from '../components/ui/select';
import { WorkflowIcon } from '../nodeIcons';
import { useStore } from '../store';

const WORKFLOW_OPTIONS = [
  { value: 'sample-workflow', label: 'Sample Workflow' },
  { value: 'data-pipeline', label: 'Data Pipeline' },
  { value: 'onboarding-flow', label: 'Onboarding Flow' },
];

export const WorkflowNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={WorkflowIcon}
      handles={[
        { id: `${id}-input`, type: 'target', position: Position.Left },
        { id: `${id}-output`, type: 'source', position: Position.Right },
      ]}
    >
      <Select
        label="Select"
        value={data?.workflow ?? ''}
        onValueChange={(v) => updateNodeField(id, 'workflow', v)}
        options={WORKFLOW_OPTIONS}
        placeholder="Select"
      />
    </BaseNode>
  );
};
