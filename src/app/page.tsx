import "./styles/page.scss";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";
import CT from "./components/sections/CT";
import Footer from "./components/sections/Footer";
import LoadScreen from "./components/ui/LoadScreen";

export default function Home() {
  return (
    <main>
      <Lenify>
        <LoadScreen />
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
