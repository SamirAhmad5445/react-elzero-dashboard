import Panel from "./Panel";

const DashboardPanel = ({ selected }) => {
  return (
    <Panel
      title="Dashboard"
      label="dashboard"
      id="dashboard"
      isSelected={selected === "dashboard"}
    >
      {/* todo: start from here */}
      DashboardPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default DashboardPanel;
