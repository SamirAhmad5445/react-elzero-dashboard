import { Icon } from "../components";

const SideBar = ({ tabs, selected, onSelect }) => {
  return (
    <aside className="sidebar bg-white p-3 md:p-5 flex flex-col item-center justify-start gap-4 md:gap-12 shadow-lg">
      <h1 className="sidebar-title text-xs md:text-xl font-bold text-center">
        Elzero
      </h1>
      <div role="tablist" className="grid gap-1 text-sm">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            panelId={tab.id}
            selected={selected}
            onSelect={onSelect}
            icon={tab.icon}
          >
            {tab.name}
          </Tab>
        ))}
      </div>
    </aside>
  );
};

const Tab = ({ panelId, selected, icon, onSelect, children }) => {
  return (
    <button
      role="tab"
      className="flex max-md:justify-center items-center gap-2.5 p-2.5 rounded-md [&[aria-selected='true']]:bg-neutral-alt"
      aria-controls={panelId}
      aria-selected={selected === panelId ? "true" : "false"}
      onClick={() => onSelect(panelId)}
    >
      <Icon name={icon} className="icon-lg md:icon-sm" />
      <span className="hidden md:block">{children}</span>
    </button>
  );
};

export default SideBar;
