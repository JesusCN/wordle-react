import MainContent from "./MainContent";
import "./MainLayout.css";
import MainTopBar from "./MainTopBar";

function MainLayout() {
  return (
    <div className="main-layout">
      <MainTopBar></MainTopBar>
      <MainContent></MainContent>
    </div>
  );
}

export default MainLayout;
