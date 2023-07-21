export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[75vh]">
      {children}
    </section>
  );
}
