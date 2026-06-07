// sidebar.js

import { useState } from 'react';
import { DraggableNode } from './draggableNode';
import {
  InputIcon,
  OutputIcon,
  EndpointIcon,
  TextIcon,
  ModelIcon,
  IfElseIcon,
  DatabaseIcon,
  WebSearchIcon,
  CronIcon,
  WorkflowIcon,
  SearchIcon,
  ChevronDownIcon,
} from './nodeIcons';
import './sidebar.css';

const NODE_ITEMS = [
  { type: 'customInput', label: 'Input', description: 'Pass data of different types into your workflow', icon: InputIcon },
  { type: 'customOutput', label: 'Output', description: 'Choose where your workflow sends its final result', icon: OutputIcon },
  { type: 'endpoint', label: 'Endpoint', description: 'Get or post to an API', icon: EndpointIcon },
  { type: 'text', label: 'Text', description: 'Use to write additional text', icon: TextIcon },
  { type: 'llm', label: 'Model', description: 'Plug AI response into your workflow.', icon: ModelIcon },
  { type: 'ifElse', label: 'If-Else', description: 'Run one path if true, another if false.', icon: IfElseIcon },
  { type: 'database', label: 'Database', description: 'Query, insert, or update records in your database', icon: DatabaseIcon },
  { type: 'webSearch', label: 'Web search', description: 'Search the web and use live results', icon: WebSearchIcon },
  { type: 'cron', label: 'Cron', description: 'Schedule your workflow to run automatically', icon: CronIcon },
  { type: 'workflow', label: 'Workflow', description: "Drop in another workflow you've built and run it as a step inside this one", icon: WorkflowIcon },
];

export const Sidebar = () => {
  const [query, setQuery] = useState('');

  const filtered = NODE_ITEMS.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.label.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__brand-row">
          <div className="sidebar__logo">VS</div>
          <div className="sidebar__avatar">A</div>
        </div>
        <div className="sidebar__workspace">
          <button type="button" className="sidebar__workspace-name">
            Sample Workflow
            <span className="sidebar__chevron"><ChevronDownIcon /></span>
          </button>
          <div className="sidebar__workspace-team">Aakash&rsquo;s team</div>
        </div>
      </div>

      <div className="sidebar__body">
        <div className="sidebar__search">
          <span className="sidebar__search-icon"><SearchIcon /></span>
          <input
            className="sidebar__search-input"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="sidebar__nodes">
          {filtered.map((item) => (
            <DraggableNode
              key={item.type}
              type={item.type}
              label={item.label}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
