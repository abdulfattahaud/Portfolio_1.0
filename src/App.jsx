import "./styles/home.scss";
import Main from "./sections/Main.jsx";
import Mouse from "./components/Mouse";
import { HoverProvider } from "./components/Mouse";
import { Menu, MenuIcon } from "./components/Menu";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <HoverProvider>
      <div id="app">
        <Mouse />
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} />
        <Main />
      </div>
    </HoverProvider>
  );
}
