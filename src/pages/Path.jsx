import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/fireStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import Jumbotron from "@/components/custom/Jumbotron";
import Timeline from "@/components/custom/Timeline";

const Path = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  console.log(id);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    const docRef = doc(db, "Paths", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      toast.error("No data found");
    }
  };
  return (
    <>
      <Jumbotron
        tech={data?.userSelection?.tech}
        days={data?.userSelection?.days}
        level={data?.userSelection?.level}
      />
      <Timeline details={data?.details} />
      <Toaster />
    </>
  );
};
export default Path;
