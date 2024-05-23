import "./styles/page.scss";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";
import CT from "./components/sections/CT";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Lenify>
        <Header />
        <Main />
        <Peek />
        <Stack />
        <CT />
        <Footer />
      </Lenify>
    </main>
  );
}
