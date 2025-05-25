'use client';

import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import { Work } from "./components/Work";
// import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Services />
      <Work />
    </>

  );
}
