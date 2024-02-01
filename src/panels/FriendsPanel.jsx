import Panel from "./Panel";

const FriendsPanel = ({ selected }) => {
  return (
    <Panel
      title="Friends"
      label="friends"
      id="friends"
      isSelected={selected === "friends"}
    >
      FriendsPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default FriendsPanel;
