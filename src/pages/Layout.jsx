import { Outlet } from "react-router-dom";
import { useState } from "react";
import Mouse from "./components/Mouse";
import { HoverProvider } from "./components/Mouse";
import { Menu } from "./components/Menu";
import { MenuIcon } from "./components/MenuIcon";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverProvider>
      <div id="app">
        <Mouse />
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} />
        <Outlet />
      </div>
    </HoverProvider>
  );
}
