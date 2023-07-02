"use client";
import AdminHeader from "../components/adminHeader/header";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useContext, useEffect, useState } from "react";
import { LoginContext, LoginProvider } from "../context/context";
import { useRouter } from "next/navigation"; // Import from next/router instead of next/navigation
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { login, setLogin } = useContext(LoginContext);
  const router = useRouter();
  const [user, setUser] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const { id } = JSON.parse(data);
      if (id !== undefined) {
        setUser(true);
        console.log("logged in", user);
      }
    }
    console.log("cargos", login);
    if (login === false) {
      router.push("/login"); // Use router.push to redirect to the login page
    }
  }, [login, router]);

  return (
    <LoginProvider>
      <main>
        <div>
          <nav>
            <AdminHeader />
          </nav>
          <section className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
            {children}
          </section>
        </div>
      </main>
    </LoginProvider>
  );
}
