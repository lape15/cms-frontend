import { views } from "../../helper/helper";
import { NavHead } from "../../helper/styles";

const slicedViews = views.slice(0, 3);

type NavProp = {
  active: string;
  changeView: (view: string) => void;
};

export const Nav = (props: NavProp) => {
  const { changeView, active } = props;

  const activeClass = (item: string) => {
    if (item === active) return "active";
    return "";
  };

  return (
    <NavHead>
      {slicedViews.map((view, index) => (
        <button
          key={index}
          onClick={() => changeView(view.value)}
          className={`${activeClass(view.value)}`}
        >
          {view.name}
        </button>
      ))}
    </NavHead>
  );
};
