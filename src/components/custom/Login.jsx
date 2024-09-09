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

export function Login({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black  text-white   ">
        <DialogHeader>
          <DialogTitle>login </DialogTitle>
          <DialogDescription>
            <Button variant="" className="w-full my-2">
              <FcGoogle className="mr-2 text-2xl bg-black" />
              Sign in with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
