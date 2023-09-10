import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";

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

export default router;
