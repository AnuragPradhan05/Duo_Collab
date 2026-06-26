import { useEffect } from "react";

import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import Bridge from "./components/Bridge/Bridge.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Lenis from "@studio-freight/lenis";

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Bridge />
      <Footer />
      <Cursor />
    </>
  );
}

export default App;