'use client'
import Image from "next/image";
import Header from "./components/Header";
import Onestop from "./components/Onestop";
import WhyScisor from "./components/WhyScisor";
import Pricing from "./components/Pricing";
import Url from "./components/Url";
import Faqs from "./components/Faqs";
import Revolution from "./components/Revolution";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <main>
    <Header />
    <Onestop />
    <WhyScisor />
   <Pricing />
   <Url />
   <Faqs />
   <Revolution />
   <Footer />

  </main>
  );
}
