"use client";
import React from "react";
import Footer from "../../components/frames/Footer";
import Subscribe from "../../components/content/subscribe/Subscribe";
import About from "../../components/content/about/About";
import News from "../../components/content/news/News";
import Contact from "../../components/content/contact/Contact";
import Partners from "@/components/content/partner/Partners";
import Opp from "@/components/content/opp/Opp";
import { useAppContext } from "@/components/AppContext";
import Loading from "@/components/utility/Loading";

export default function Page() {
  const { opps, newsList, partners } = useAppContext();

  return (
    <>
      <div className="mb-[150px] md:mb-[300px] flex flex-col items-center">
        <Subscribe />
        {!newsList || !partners ? (
          <div className="md:mt-16">
            <Loading />
          </div>
        ) : (
          <>
            <About />
            <News />
            <Partners />
            {!opps?.length ? null : <Opp />}
          </>
        )}
        <Contact />
      </div>
      <Footer />
    </>
  );
}
