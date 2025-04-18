import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <main className="grid px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-btn">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link to="/My-Portfolio" className="text-sm font-semibold text-text">
            Go Back Home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
