/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/service/fireStore";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

const Cards = ({ days, level, tech, img, id }) => {
  const navigate = useNavigate();
  const deleteHandler = async () => {
    try {
      await deleteDoc(doc(db, "Paths", id));
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Card className=" w-96 border-none hover:shadow-md hover:shadow-gray-700">
        <CardHeader>
          <Avatar>
            <AvatarImage src={img} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle className="text-white">{tech}</CardTitle>
          <CardDescription className="text-white">
            Roadmap for {level}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white">
          <p>Duration: {days} days</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate("/path/" + id)} variant="secondary">
            Start Learning
          </Button>
          <Button onClick={deleteHandler} variant="destructive">
            Delete
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
};

export default Cards;
