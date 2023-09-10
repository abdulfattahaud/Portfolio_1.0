import { RouterProvider } from "react-router-dom";
import "./styles/home.scss";
import Mouse from "./components/Mouse";
import { HoverProvider } from "./components/Mouse";
import { Menu, MenuIcon } from "./components/Menu";
import { useState } from "react";
import router from "./router";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverProvider>
      <div id="app">
        <Mouse />
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} />
        <RouterProvider router={router} />
      </div>
    </HoverProvider>
  );
}
