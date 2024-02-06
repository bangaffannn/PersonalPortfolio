import React from "react";
import Sidebar from "../SidebarCompile.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
