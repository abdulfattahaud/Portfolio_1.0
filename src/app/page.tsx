"use client";
import "./styles/page.scss";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
import Lenify from "./components/Lenis";
import Peek from "./components/sections/Peek";
import Stack from "./components/sections/Stack";
import CT from "./components/sections/CT";
import Footer from "./components/sections/Footer";
import { useState } from "react";
import Projects from "./components/sections/Projects";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <main>
      <Lenify>
        {/* <LoadScreen setLoading={setLoading} loading={loading} /> */}
        <Header loaded={loading} />
        <Main />
        <Peek />
        <Projects />
        <Stack />
        <CT />
        {/* <Contact /> */}
        <Footer />
      </Lenify>
    </main>
  );
}
