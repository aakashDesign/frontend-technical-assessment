// textNode.js

import { useLayoutEffect, useMemo, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Textarea } from '../components/ui/textarea';
import { TextIcon } from '../nodeIcons';
import { useStore } from '../store';

// Matches {{ validJsIdentifier }} (whitespace inside braces allowed).
const VARIABLE_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

const extractVariables = (text) => {
  if (!text) return [];
  const seen = new Set();
  const out = [];
  for (const match of text.matchAll(VARIABLE_REGEX)) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      out.push(name);
    }
  }
  return out;
};

const MIN_WIDTH = 280;
const MAX_WIDTH = 600;
const MIN_TEXTAREA_HEIGHT = 64;
const CHAR_WIDTH = 6.5; // approx for 12px Inter
const HORIZONTAL_CHROME = 180; // label column + paddings

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const text = data?.text ?? '';
  const textareaRef = useRef(null);

  const variables = useMemo(() => extractVariables(text), [text]);

  const nodeWidth = useMemo(() => {
    const longest = text
      .split('\n')
      .reduce((max, line) => Math.max(max, line.length), 0);
    const estimated = longest * CHAR_WIDTH + HORIZONTAL_CHROME;
    return Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, estimated));
  }, [text]);

  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.max(MIN_TEXTAREA_HEIGHT, el.scrollHeight)}px`;
  }, [text, nodeWidth]);

  const handles = useMemo(() => {
    const out = [{ id: `${id}-output`, type: 'source', position: Position.Right }];
    variables.forEach((name, idx) => {
      out.push({
        id: `${id}-var-${name}`,
        type: 'target',
        position: Position.Left,
        style: { top: `${((idx + 1) / (variables.length + 1)) * 100}%` },
      });
    });
    return out;
  }, [id, variables]);

  return (
    <BaseNode
      nodeId={id}
      name={data?.name}
      icon={TextIcon}
      style={{ width: nodeWidth }}
      handles={handles}
    >
      <Textarea
        ref={textareaRef}
        label="Text"
        value={text}
        onChange={(e) => updateNodeField(id, 'text', e.target.value)}
        placeholder="Type (( to utilize variables"
        rows={3}
        style={{ resize: 'none', overflow: 'hidden' }}
      />
    </BaseNode>
  );
};
