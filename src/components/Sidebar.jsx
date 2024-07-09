import { BottomSheet } from "./BottomSheet";

export const Sidebar = ({
  toggleActiveTab,
  setToggleActiveTab,
  songs,
  search,
  setSearch,
}) => {
  return (
    <aside className="flex justify-between max-h-[92vh] xl:flex-col ">
      <div className="xl:hidden">
        <BottomSheet
          toggleActiveTab={toggleActiveTab}
          setToggleActiveTab={setToggleActiveTab}
          songs={songs}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <img src="/logo.svg" className="h-10 w-fit" />
      <img src="/user.svg" className="w-12 h-12" />
    </aside>
  );
};
