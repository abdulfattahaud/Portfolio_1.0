import "./styles/home.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Mouse from "./components/Mouse";
import { HoverProvider } from "./components/Mouse";
import { Menu } from "./components/Menu";
import MenuIcon from "./components/MenuIcon";

export default function App() {
  return (
    <HoverProvider>
      <div id="app">
        <Mouse />
        <MenuIcon />
        <Menu />
        <Outlet />
      </div>
    </HoverProvider>
  );
}
