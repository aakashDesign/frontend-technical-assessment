import { useState, useRef, useEffect } from 'react';
import { Handle } from 'reactflow';
import { useStore } from '../store';
import './BaseNode.css';

const EllipsisIcon = () => (
    <svg viewBox="0 0 12 12" aria-hidden="true">
        <circle cx="2" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
    </svg>
);

const isHandleConnected = (edges, nodeId, handleId) =>
    edges.some(
        (edge) =>
            (edge.source === nodeId && edge.sourceHandle === handleId) ||
            (edge.target === nodeId && edge.targetHandle === handleId)
    );

export const BaseNode = ({ nodeId, name, icon: Icon, handles = [], children, style }) => {
    const updateNodeField = useStore((state) => state.updateNodeField);
    const edges = useStore((state) => state.edges);
    const [isEditing, setIsEditing] = useState(false);
    const [draftName, setDraftName] = useState(name ?? 'untitled');
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isEditing) {
            setDraftName(name ?? 'untitled');
        }
    }, [name, isEditing]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const commitName = () => {
        const trimmed = draftName.trim();
        if (trimmed && trimmed !== name) {
            updateNodeField(nodeId, 'name', trimmed);
        } else {
            setDraftName(name ?? 'untitled');
        }
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setDraftName(name ?? 'untitled');
        setIsEditing(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            commitName();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            cancelEdit();
        }
    };

    return (
        <div className="base-node" style={style}>
            <div className="base-node__shell">
                <div className="base-node__header">
                    <div className="base-node__title">
                        {Icon ? (
                            <span className="base-node__icon">
                                <Icon />
                            </span>
                        ) : null}
                        {isEditing ? (
                            <input
                                ref={inputRef}
                                type="text"
                                className="base-node__name-input nodrag nopan"
                                value={draftName}
                                onChange={(e) => setDraftName(e.target.value)}
                                onBlur={commitName}
                                onKeyDown={handleKeyDown}
                                aria-label="Node name"
                            />
                        ) : (
                            <button
                                type="button"
                                className="base-node__title-text nodrag nopan"
                                onClick={() => setIsEditing(true)}
                                aria-label={`Rename ${name ?? 'untitled'}`}
                            >
                                {name ?? 'untitled'}
                            </button>
                        )}
                    </div>
                    <button type="button" className="base-node__menu" aria-label="More options">
                        <EllipsisIcon />
                    </button>
                </div>
                <div className="base-node__body">
                    <div className="base-node__body-inner">{children}</div>
                </div>
            </div>
            {handles.map((handle) => (
                <Handle
                    key={handle.id}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    className={`base-node__handle${
                        isHandleConnected(edges, nodeId, handle.id) ? ' base-node__handle--connected' : ''
                    }`}
                    style={handle.style}
                />
            ))}
        </div>
    );
};
