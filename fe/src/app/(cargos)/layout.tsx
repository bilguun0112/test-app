import AdminHeader from "../components/adminHeader/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AdminHeader />
        <main className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
