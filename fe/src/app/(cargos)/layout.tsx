import React from "react";
import AdminHeader from "../components/adminHeader/header";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <AdminHeader />
      </nav>
      <section className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {children}
      </section>
    </div>
  );
}
