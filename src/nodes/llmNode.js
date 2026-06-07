// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { ModelIcon } from '../nodeIcons';
import { useStore } from '../store';

const MODEL_OPTIONS = [
  { value: 'Opus 4.8', label: 'Opus 4.8' },
  { value: 'Sonnet 4.6', label: 'Sonnet 4.6' },
  { value: 'Haiku 4.5', label: 'Haiku 4.5' },
  { value: 'GPT-4o', label: 'GPT-4o' },
  { value: 'Gemini 2.0', label: 'Gemini 2.0' },
];

export const LLMNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={ModelIcon}
      handles={[
        { id: `${id}-system`, type: 'target', position: Position.Left, style: { top: `${100 / 3}%` } },
        { id: `${id}-prompt`, type: 'target', position: Position.Left, style: { top: `${200 / 3}%` } },
        { id: `${id}-response`, type: 'source', position: Position.Right },
      ]}
    >
      <Select
        label="Model"
        value={data?.model ?? 'Opus 4.8'}
        onValueChange={(v) => updateNodeField(id, 'model', v)}
        options={MODEL_OPTIONS}
      />
      <Input
        label="System"
        value={data?.system ?? ''}
        onChange={(e) => updateNodeField(id, 'system', e.target.value)}
        placeholder="Answer the questions in a single sentence with a friendly tone"
      />
      <Input
        label="Prompt"
        value={data?.prompt ?? ''}
        onChange={(e) => updateNodeField(id, 'prompt', e.target.value)}
        placeholder="Type (( to utilize variables"
      />
    </BaseNode>
  );
};
