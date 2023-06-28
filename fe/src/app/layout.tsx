import TopBar from "./components/header/topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/header/header";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cargo website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} w-screen`}> */}
      <body>
        <TopBar />
        <Header />
        <main className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
