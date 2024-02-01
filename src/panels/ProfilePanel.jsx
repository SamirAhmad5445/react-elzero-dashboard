import Panel from "./Panel";

const ProfilePanel = ({ selected }) => {
  return (
    <Panel
      title="Profile"
      label="profile"
      id="profile"
      isSelected={selected === "profile"}
    >
      ProfilePanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default ProfilePanel;
