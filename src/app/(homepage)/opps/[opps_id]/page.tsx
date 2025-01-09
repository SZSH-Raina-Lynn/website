"use client";
import { getOneNews } from "@/lib/api";
import { NewsType, OppType } from "@/utility/types";
import { convertTimestamp } from "@/utility/functions";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/components/AppContext";
import Loading from "@/components/utility/Loading";

export default function Page({
  params,
}: Readonly<{ params: { opps_id: string } }>) {
  const [isScrolled, setScrolled] = useState(false);
  const [opp, setOpp] = useState<OppType>({
    id: "",
    title: "",
    content: "",
    notified: false,
  });
  const { opps } = useAppContext();
  const toggleScrolled = () => {
    document.body.scrollTop > 200 ? setScrolled(true) : setScrolled(false);
  };
  const goTop = () => {
    isScrolled && document.body.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (opps?.length) {
      const cur = opps.filter((op) => op.id === params.opps_id);
      if (cur) {
        setOpp(cur[0]);
      }
    }
    //add eventlistener to window
    document.body.addEventListener("scroll", toggleScrolled, true);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document.body.removeEventListener("scroll", toggleScrolled, true);
    };
  }, [opps, params.opps_id]);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div
        className="flex flex-col justify-center items-center p-2 md:m-4 max-w-[960px]"
        id="top"
      >
        {opp.content.length ? (
          <div className="p-4 md:m-6 w-full md:w-3/4 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-center mb-8">
                {opp.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: opp.content }} />

              {opp.created_time && (
                <div className="text-right text-sm font-light mt-2 text-slate-400">
                  发布于{convertTimestamp(opp.created_time)}
                </div>
              )}
            </div>
            <div className="bottom-20 flex flex-row justify-around items-center mt-16">
              {isScrolled && (
                <button className="py-1 px-6" onClick={goTop}>
                  回到顶部
                </button>
              )}
              <button className="py-1 px-6">
                <a href="/opps">返回列表</a>
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="w-full bottom-0 left-0 text-center">
        <p className="font-extralight text-xs text-slate-700">
          &copy; 2023 SZCC
        </p>
      </div>
    </div>
  );
}
