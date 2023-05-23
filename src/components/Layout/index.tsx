import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "./Header/HeaderComponent";

const Layout = () => {
  const AppShellProps = {
    styles: {
      main: {
        minHeight: "calc(100vh - 60px)",
        paddingTop: "60px",
      },
    },
    navbarOffsetBreakpoint: "sm",
    header: <HeaderComponent />,
  };

  return (
    <AppShell {...AppShellProps}>
      <Outlet />
    </AppShell>
  );
};

export default Layout;
