import { useState } from "react";
import { Header, SideBar } from "./components";
// import { Panel } from "./panels";
import { panelsData } from "./utils/data";
import {
  DashboardPanel,
  SettingsPanel,
  ProfilePanel,
  ProjectsPanel,
  CoursesPanel,
  FriendsPanel,
  FilesPanel,
  PlansPanel,
} from "./panels";

const App = () => {
  const [selected, setSelected] = useState(
    sessionStorage.getItem("recentVisitedTabId") || panelsData[0].id
  );

  function handleSelect(tab) {
    setSelected(tab);
    sessionStorage.setItem("recentVisitedTabId", tab);
  }

  return (
    <>
      <SideBar tabs={panelsData} selected={selected} onSelect={handleSelect} />
      <Header />
      <main>
        <DashboardPanel selected={selected} />
        <SettingsPanel selected={selected} />
        <ProfilePanel selected={selected} />
        <ProjectsPanel selected={selected} />
        <CoursesPanel selected={selected} />
        <FriendsPanel selected={selected} />
        <FilesPanel selected={selected} />
        <PlansPanel selected={selected} />
      </main>
    </>
  );
};

export default App;
