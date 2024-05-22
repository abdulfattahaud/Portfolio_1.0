import "./styles/page.scss";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import Main from "@/app/components/sections/Main";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";

export default function Home() {
  return (
    <main>
      <Lenify>
        <Header />
        <Main />
        <Peek />
        <Stack />
        {/* <Projects />
        <About />
        <Footer /> */}
      </Lenify>
    </main>
  );
}
