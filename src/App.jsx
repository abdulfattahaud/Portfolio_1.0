// Import Swiper styles
import "swiper/css";
import "./styles/home.scss";
import Main from "./sections/Main.jsx";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div id="app">
      <Main />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
