import { ReactNode } from "react";
import cls from "./Layout.module.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
type LayoutProps = {
  navbarSlot?: ReactNode;
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
};
export const Layout = (props: LayoutProps) => {
  const { bottomSlot, headerSlot, navbarSlot } = props;
  return (
    <div className={cls.root}>
      <header>
        {navbarSlot}
        {headerSlot}
      </header>
      <div className={cls.container}>
        <div className={cls.content}>
          <Outlet />
        </div>
      </div>
      <footer className={cls.footer}>
        <a href="https://github.com/DanyPlaya/reactInterTestTask">
          https://github.com/DanyPlaya/reactInterTestTask
        </a>
      </footer>
      <ScrollRestoration />
    </div>
  );
};
