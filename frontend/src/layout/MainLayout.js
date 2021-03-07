// Menu
import Menu from "../components/menu/Menu";

// CSS
import "./MainLayout.css";

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <div className="container">
        <Menu />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
