import Navbar from "@/components/Navbar";

/**
 * Root layout component that renders the global navigation and page content.
 *
 * @param children - The page content to render below the global Navbar.
 * @returns The layout element containing the `Navbar` followed by `children`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}