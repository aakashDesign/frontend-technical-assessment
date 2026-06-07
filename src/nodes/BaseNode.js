import { Handle } from 'reactflow';
import './BaseNode.css';

const EllipsisIcon = () => (
    <svg viewBox="0 0 12 12" aria-hidden="true">
        <circle cx="2" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
    </svg>
);

export const BaseNode = ({ title, icon: Icon, handles = [], children, style }) => (
    <div className="base-node" style={style}>
        <div className="base-node__shell">
            <div className="base-node__header">
                <div className="base-node__title">
                    {Icon ? (
                        <span className="base-node__icon">
                            <Icon />
                        </span>
                    ) : null}
                    <span className="base-node__title-text">{title}</span>
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
                className="base-node__handle"
                style={handle.style}
            />
        ))}
    </div>
);
