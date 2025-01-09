"use client";
import React, { useEffect } from "react";

import { getAllNews, getPartners, getOpps } from "@/lib/api";
import { useAppContext } from "@/components/AppContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setNewsList, setPartners, setOpps } = useAppContext();
  useEffect(() => {
    getAllNews()
      .then((res) => {
        if (res.data) {
          setNewsList(res.data);
        }
        return getPartners();
      })
      .then((partners) => {
        if (partners.data) {
          setPartners(partners.data);
        }
        return getOpps();
      })
      .then((opps) => {
        if (opps.data) {
          setOpps(opps.data);
        }
      });
  }, [setNewsList, setOpps, setPartners]);
  return <div>{children}</div>;
}
