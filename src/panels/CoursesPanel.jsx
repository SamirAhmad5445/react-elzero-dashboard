import Panel from "./Panel";

const CoursesPanel = ({ selected }) => {
  return (
    <Panel
      title="Courses"
      label="courses"
      id="courses"
      isSelected={selected === "courses"}
    >
      CoursesPanel: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illo fuga recusandae dolorum maxime et ipsam quis quia voluptates dolorem.
      Nulla, ullam suscipit eligendi vero tempore natus in omnis necessitatibus
      asperiores.
    </Panel>
  );
};

export default CoursesPanel;
