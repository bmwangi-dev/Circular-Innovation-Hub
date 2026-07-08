import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Circular Innovation Hub homepage."
        path="/404"
        noIndex
      />

      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-bold text-[#3d7118] mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or the URL may be incorrect.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#3d7118] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2d5a12] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
