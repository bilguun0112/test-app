import AdminHeader from "../components/adminHeader/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <section className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {children}
      </section>
    </div>
  );
}
