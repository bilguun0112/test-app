export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      {children}
    </section>
  );
}
