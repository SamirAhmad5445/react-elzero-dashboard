import Panel from "./Panel";

const SettingsPanel = ({ selected }) => {
  return (
    <Panel
      title="Settings"
      label="settings"
      id="settings"
      isSelected={selected === "settings"}
    >
      SettingsPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default SettingsPanel;
