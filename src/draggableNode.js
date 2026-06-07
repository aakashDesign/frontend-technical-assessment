// draggableNode.js

export const DraggableNode = ({ type, label, description, icon: Icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType };
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    return (
      <div
        className="draggable-node"
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
        <div className="draggable-node__icon">
          {Icon ? <Icon /> : null}
        </div>
        <div className="draggable-node__text">
          <div className="draggable-node__title">{label}</div>
          {description ? (
            <div className="draggable-node__description">{description}</div>
          ) : null}
        </div>
      </div>
    );
};
