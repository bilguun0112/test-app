import AdminHeader from "../components/adminHeader/header";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
config.autoAddCss = false;

export const metadata = {
  title: "Cargo's admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <AdminHeader />
      </nav>
      <main className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {children}
      </main>
    </div>
  );
}
