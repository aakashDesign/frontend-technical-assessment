// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, BackgroundVariant, MiniMap, ConnectionLineType } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { EndpointNode } from './nodes/endpointNode';
import { WebSearchNode } from './nodes/webSearchNode';
import { CronNode } from './nodes/cronNode';
import { WorkflowNode } from './nodes/workflowNode';
import { DatabaseNode } from './nodes/databaseNode';
import { IfElseNode } from './nodes/ifElseNode';

import 'reactflow/dist/style.css';

const gridSize = 30;
const proOptions = { hideAttribution: true };
const defaultEdgeOptions = {
  type: 'default',
  animated: true,
  style: { stroke: '#6ED17A', strokeWidth: 2 },
};
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  endpoint: EndpointNode,
  webSearch: WebSearchNode,
  cron: CronNode,
  workflow: WorkflowNode,
  database: DatabaseNode,
  ifElse: IfElseNode,
};

const DEFAULT_NODE_DATA = {
  customInput: { inputType: 'Text' },
  customOutput: { outputType: 'Text' },
  llm: { model: 'Opus 4.8' },
  endpoint: { method: 'Get' },
  ifElse: { condition: '=' },
  cron: { cronType: 'Daily', time: '9:00 am' },
  database: { dbType: 'SQL' },
  text: { text: '' },
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  getDefaultNodeName: state.getDefaultNodeName,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      getDefaultNodeName,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: {
                id: nodeID,
                nodeType: `${type}`,
                name: getDefaultNodeName(type),
                ...(DEFAULT_NODE_DATA[type] ?? {}),
              },
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance, getNodeID, getDefaultNodeName, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div ref={reactFlowWrapper} style={{width: '100%', height: '100%'}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                defaultEdgeOptions={defaultEdgeOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType={ConnectionLineType.Bezier}
                connectionLineStyle={{ stroke: '#6ED17A', strokeWidth: 2 }}
            >
                <Background variant={BackgroundVariant.Lines} color="#343A42BF" gap={gridSize * 2} />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
        </>
    )
}
