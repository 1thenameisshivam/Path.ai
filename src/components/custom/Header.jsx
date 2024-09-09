/* eslint-disable react/jsx-key */
import { navData } from "@/utility/constant";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/custom/Logo";
import { Button } from "../ui/button";
import { Login } from "./Login";
import { TiThMenu } from "react-icons/ti";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TypewriterComponent from "typewriter-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Header = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <header className="p-4 dark:text-gray-800 text-white">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center gap-36">
          <Logo />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navData.map((item) => (
              <li className="flex items-center px-4 -mb-1 cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          {data && (
            <TypewriterComponent
              options={{
                strings: [
                  `<strong><span style="color: #007FFF;">${data.name} 👋</span></strong>`,
                  `<strong><span style="color: #27ae60;">Have a nice day</span></strong>`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          )}

          {!data?.isAuthenticated ? (
            <Login
              button=<Button className="mt-5 bg-blue-600">Log In</Button>
            />
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src={data.profilePic} alt="profile pic" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="bg-gray-950 text-white">
                <p>{data.email}</p>
                <div onClick={handleLogout}>
                  <Button variant="destructive" className="w-full mt-5">
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <div className="lg:hidden text-white">
          <Sheet>
            <SheetTrigger>
              <TiThMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent className="bg-black text-white w-[300px] flex flex-col items-star">
              <div className="flex flex-col gap-4 text-2xl mt-11">
                {navData.map((item) => (
                  <li className="flex items-center px-4 -mb-1 cursor-pointer  ">
                    {item.name}
                  </li>
                ))}
              </div>
              {!data?.isAuthenticated ? (
                <Login
                  button=<Button className="mt-5 bg-blue-600">Log In</Button>
                />
              ) : (
                <Popover>
                  <PopoverTrigger>
                    <Button className="w-full bg-blue-500">Profile</Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-950 text-white">
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage src={data.profilePic} alt="profile pic" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p>{data.email}</p>
                    </div>
                    <div onClick={handleLogout}>
                      <Button variant="destructive" className="w-full mt-5">
                        Logout
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
