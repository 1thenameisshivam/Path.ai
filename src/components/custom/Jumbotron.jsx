/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
const Jumbotron = ({ days, level, tech }) => {
  return (
    <div className=" text-white p-4">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full xl:w-8/12 p-6 text-lg">
            <h1 className="text-3xl text-white font-bold leading-tight">
              Your {tech} Roadmap
            </h1>
            <p className="text-lg text-white opacity-75">
              Learn {tech} in {days} days and reach a {level} level
            </p>
            <div className="flex items-center mt-4">
              <div className="mr-4">
                <Button variant="secondary">Start Learning</Button>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-4/12 p-6 text-lg">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl bg-transparent">your Gole</h2>
              <p className="text-lg text-white bg-transparent">
                Reach a {level} level in {days} days
              </p>
              <div className="flex items-center bg-transparent mt-4">
                <div className="mr-4 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-transparent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mr-4 bg-transparent">
                  <p className="text-lg bg-transparent text-white ">
                    {days} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
