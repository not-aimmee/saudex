import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | SAUDEX GLOBAL" description="The page you're looking for could not be found." noIndex />
      <main className="min-h-[60vh] px-6 py-24 text-center text-[#031926]">
        <h1 className="font-sentient text-4xl">Page not found</h1>
        <p className="mt-4">The link may be outdated or the page may have moved.</p>
        <Link className="mt-8 inline-block underline" to="/">Return to the homepage</Link>
      </main>
    </>
  );
}
