import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Error = () => {
  return (
    <section className="flex items-center h-screen p-16 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="text-9xl font-extrabold  relative z-10">
            <span className="sr-only text-white">Error</span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                WebkitBackgroundClip: "text",
              }}
            >
              404
            </span>
          </h2>
        </div>
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn't find this page.
        </p>
        <p className="mt-4 mb-8 dark:text-gray-600">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          to={"/"}
          className="px-8 py-3 font-semibold rounded text-violet-600 bg-white hover:text-white hover:bg-violet-600"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
