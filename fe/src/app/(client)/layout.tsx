import TopBar from "../components/header/topbar";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/header/header";
import { LoginProvider } from "../context/context";
config.autoAddCss = false;

export const metadata = {
  title: "Cargo website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoginProvider>
      <main>
        <nav>
          <TopBar />
          <Header />
        </nav>
        <section className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          {children}
        </section>
      </main>
    </LoginProvider>
  );
}
