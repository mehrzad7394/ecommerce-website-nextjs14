export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow container mx-auto px-4 body-margin-mobile md:mt-[60px]">
      {children}
    </main>
  );
}
