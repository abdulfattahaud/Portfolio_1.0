import "./styles/page.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";
import About from "@/app/components/About";
import Projects from "@/app/components/Porjects";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
