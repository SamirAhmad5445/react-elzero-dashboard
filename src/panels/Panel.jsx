import "./Panel.css";

const Panel = ({ id, title, label, isSelected, children }) => {
  return (
    <div id={id} className="panel" aria-labelledby={label} hidden={!isSelected}>
      <h2 className="panel-title">{title}</h2>
      {children}
    </div>
  );
};

export default Panel;
