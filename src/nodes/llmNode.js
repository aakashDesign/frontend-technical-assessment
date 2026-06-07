// llmNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { ModelIcon } from '../nodeIcons';

const MODEL_OPTIONS = [
  { value: 'Opus 4.8', label: 'Opus 4.8' },
  { value: 'Sonnet 4.6', label: 'Sonnet 4.6' },
  { value: 'Haiku 4.5', label: 'Haiku 4.5' },
];

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'Opus 4.8');
  const [system, setSystem] = useState(data?.system || '');
  const [prompt, setPrompt] = useState(data?.prompt || '');

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
        value={model}
        onValueChange={setModel}
        options={MODEL_OPTIONS}
      />
      <Input
        label="System"
        value={system}
        onChange={(e) => setSystem(e.target.value)}
        placeholder="Answer the questions in a single sentence with a friendly tone"
      />
      <Input
        label="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type (( to utilize variables"
      />
    </BaseNode>
  );
};
