import "./styles/page.scss";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
// import Projects from "@/app/components/sections/Projects";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";
import CT from "./components/sections/CT";

export default function Home() {
  return (
    <main>
      <Lenify>
        <Header />
        <Main />
        <Peek />
        <Stack />
        <CT />
      </Lenify>
    </main>
  );
}
