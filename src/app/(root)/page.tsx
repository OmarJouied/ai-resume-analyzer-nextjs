/**
 * Renders the home page layout for tracking applications and resume ratings.
 *
 * The component outputs a full-screen, centered container with responsive
 * padding and light/dark background styles. It includes a main content area
 * constrained to a maximum width and an <h1> heading that displays
 * "Track Your Applications" and "Resume Ratings".
 *
 * @returns A React element containing the page layout and heading.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Track Your Applications <br /> & Resume Ratings</h1>
      </main>
    </div>
  );
}