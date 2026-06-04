import { Handle, Position } from 'reactflow';

export const BaseNode = ({ title, handles = [], children, style }) => (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', ...style }}>
        <div><strong>{title}</strong></div>
        <div>{children}</div>
        {handles.map((handle) => (
        <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
        />
        ))}
    </div>
  );