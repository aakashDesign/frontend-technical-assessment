// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
    tittle="LLM"
    handles={[
      { id: `${id}-system`, type: 'target', position: Position.Left ,  style: { top: `${100/3}%` } },
      { id: `${id}-prompt`, type: 'target', position: Position.Left ,  style: { top: `${200/3}%`} },
      { id: `${id}-response`, type: 'source', position: Position.Right },
      ]}
    >
    <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}

/*
<div style={{width: 200, height: 80, border: '1px solid black'}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
*/
