"use client";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";
import CT from "./components/sections/CT";
import Footer from "./components/sections/Footer";
import LoadScreen from "./components/ui/LoadScreen";
import { useEffect, useState } from "react";
import Projects from "./components/sections/Projects";
import { Leva } from "leva";

export default function HomeController() {
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState(false);
  useEffect(() => {
    if (window.location.hash === "#debug") {
      setDebug(true);
    }
  }, []);

  return (
    <main>
      <Lenify>
        {/* <LoadScreen setLoading={setLoading} loading={loading} /> */}
        <Leva hidden={!debug} />
        <Header />
        <Main />
        <Peek />
        <Projects />
        <Stack />
        <CT />
        <Footer />
      </Lenify>
    </main>
  );
}
