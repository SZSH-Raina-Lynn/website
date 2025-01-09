"use client";
import Image from "next/image";
import { AppBar } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/");
  };
  return (
    <div>
      <AppBar
        color="transparent"
        position="static"
        sx={{ justifyContent: "center" }}
      >
        <Image
          src="/logo.png"
          onClick={handleRedirect}
          priority={false}
          alt="logo"
          width="378"
          height="52"
          style={{ padding: "0.6rem" }}
        />
      </AppBar>

      {children}
    </div>
  );
}
