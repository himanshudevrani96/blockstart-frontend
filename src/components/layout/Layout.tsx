import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <main
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          background: `#FFF`,
          maxWidth: "1440px",
        }}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
