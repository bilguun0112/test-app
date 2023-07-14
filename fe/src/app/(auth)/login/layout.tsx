import Header from "@/app/components/header/header";
import TopBar from "@/app/components/header/topbar";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <TopBar />
        <Header />
      </nav>
      <main>
        <section>{children}</section>;
      </main>
    </div>
  );
}
