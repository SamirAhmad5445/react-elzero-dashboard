import Panel from "./Panel";

const FilesPanel = ({ selected }) => {
  return (
    <Panel
      title="Files"
      label="files"
      id="files"
      isSelected={selected === "files"}
    >
      FilesPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
      fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default FilesPanel;
