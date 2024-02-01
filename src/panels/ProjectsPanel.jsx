import Panel from "./Panel";

const ProjectsPanel = ({ selected }) => {
  return (
    <Panel
      title="Projects"
      label="projects"
      id="projects"
      isSelected={selected === "projects"}
    >
      ProjectsPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default ProjectsPanel;
