import { Button } from "../ui/button";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-white">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Welcome to leave your message.
          </div>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt=""
          className="p-6 h-52 md:h-64"
        />
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded bg-gray-800"
          ></textarea>
        </div>
        <Button className="w-full hover:bg-blue-600">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
