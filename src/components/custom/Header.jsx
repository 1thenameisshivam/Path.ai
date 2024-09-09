/* eslint-disable react/jsx-key */
import { navData } from "@/utility/constant";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/custom/Logo";
import { Button } from "../ui/button";
import { Login } from "./Login";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  return (
    <header className="p-4 dark:text-gray-800 text-white">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center gap-36">
          <Logo />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navData.map((item) => (
              <li className="flex items-center px-4 -mb-1  ">{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Login button=<Button className="mt-5 bg-blue-600">Log In</Button> />
        </div>
        <div className="lg:hidden text-white">
          <Sheet>
            <SheetTrigger>
              <TiThMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent className="bg-black text-white w-[300px] flex flex-col items-star">
              <div className="flex flex-col gap-4 text-2xl mt-11">
                {navData.map((item) => (
                  <li className="flex items-center px-4 -mb-1  ">
                    {item.name}
                  </li>
                ))}
              </div>
              <Login
                button=<Button className="mt-5 bg-blue-600">Log In</Button>
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
