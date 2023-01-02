import { MenuWrapper, Item } from "../../helper/styles";

const views = [
  { value: "dashboard", name: "Dashboard" },
  { value: "posts", name: "Posts" },
  { value: "create", name: "Create new post" },
  { value: "profile", name: "Profile" },
  { value: "drafts", name: "Drafts" },
  { value: "settings", name: "Settings" },
];

type MenuProp = {
  active: string;
  changeView: (act: string) => void;
};
export const SideMenu = (props: MenuProp) => {
  const { active, changeView } = props;

  const activeClass = (item: string) => {
    if (item === active) return "active";
    return "";
  };

  return (
    <MenuWrapper>
      {views.map((view, indx) => (
        <Item
          key={indx}
          onClick={() => changeView(view.value)}
          className={`${activeClass(view.value)}`}
        >
          <span>{view.name}</span>
        </Item>
      ))}
    </MenuWrapper>
  );
};
