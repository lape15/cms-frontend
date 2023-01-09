import { MenuWrapper, Item } from "../../helper/styles";
import { views } from "../../helper/helper";

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
