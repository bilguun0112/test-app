import AdminHeader from "@/app/components/adminHeader/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <section>{children}</section>
    </div>
  );
}