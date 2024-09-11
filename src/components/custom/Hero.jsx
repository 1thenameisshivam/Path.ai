import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mb-14">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold  sm:text-6xl">
            Level Up
            <p className="flex">
              Your <p className="text-red-600 pl-2"> Tech Career</p>
            </p>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Discover the perfect pathway to master any tech skill
            <br className="hidden md:inline lg:hidden" />
            with our curated learning roadmaps.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to={"/about"}
              className="px-8 py-3 text-lg font-semibold rounded bg-red-600 dark:text-gray-50"
            >
              Know More
            </Link>
            <Link
              to={"/create"}
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://mambaui.com/assets/svg/Business_SVG.svg"
            alt="svg image"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
