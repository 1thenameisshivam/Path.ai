/* eslint-disable react/prop-types */
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { auth, provider } from "@/utility/firebase";
import { signInWithPopup } from "firebase/auth";
export function Login({ button }) {
  const handleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const user = data.user;
      console.log(data);
      // Store user information in localStorage as an object
      localStorage.setItem(
        "user",
        JSON.stringify({
          isAuthenticated: true,
          email: user.email,
          profilePic: user.photoURL,
          name: user.displayName,
        })
      );

      window.location.reload();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black  text-white   ">
        <DialogHeader>
          <DialogTitle>login </DialogTitle>
          <DialogDescription>
            <Button onClick={handleLogin} className="w-full my-2">
              <FcGoogle className="mr-2 text-2xl bg-black" />
              Sign in with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
