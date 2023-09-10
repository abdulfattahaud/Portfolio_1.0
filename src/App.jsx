import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/home.scss";
import Main from "./pages/Main.jsx";
import Mouse from "./components/Mouse";
import { HoverProvider } from "./components/Mouse";
import { Menu, MenuIcon } from "./components/Menu";
import { useState } from "react";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Not found body go back</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>Not found body go back</div>,
  },
]);

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
