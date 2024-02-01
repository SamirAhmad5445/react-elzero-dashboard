import Icon from "./Icon";

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-center items-center gap-3">
      <div className="mr-auto relative">
        <Icon
          name="/assets/icons/search.svg"
          size={16}
          className="absolute text-neutral top-1/2 left-4 -translate-x-1/2 -translate-y-1/2"
        />
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="border border-neutral-alt p-2.5 pl-7 text-sm rounded-xl h-9 w-[10rem] focus:w-[12rem] transition-all duration-500 placeholder:font-thin"
          placeholder="Type A Keyword"
        />
      </div>
      <Icon
        name="/assets/icons/bell.svg"
        className="notification-bell"
        size={16}
      />
      <img src="/assets/avatar.png" alt="profile pic" width={32} height={32} />
    </header>
  );
};

export default Header;
