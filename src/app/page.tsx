"use client";
import "./styles/page.css";
import Header from "@/app/components/sections/Header";
import Main from "@/app/components/sections/Main";
import Lenify from "@/app/components/Lenis";
import Peek from "@/app/components/sections/Peek";
import Stack from "@/app/components/sections/Stack";
import CT from "@/app/components/sections/CT";
import Footer from "@/app/components/sections/Footer";
import { useState } from "react";
import Projects from "@/app/components/sections/Projects";

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
