import Panel from "./Panel";

const PlansPanel = ({ selected }) => {
  return (
    <Panel
      title="Plans"
      label="plans"
      id="plans"
      isSelected={selected === "plans"}
    >
      PlansPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
      fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default PlansPanel;
