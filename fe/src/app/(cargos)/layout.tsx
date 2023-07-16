import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import AdminSideBar from "../components/testAdmin/sideBarTest";

config.autoAddCss = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex w-full">
      <AdminSideBar />
      <section className="w-full max-w-[1280px] px-5 mx-auto">
        {children}
      </section>
    </div>
  );
}
