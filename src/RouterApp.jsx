import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
