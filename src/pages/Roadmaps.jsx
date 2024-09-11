import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/fireStore";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "@/components/custom/Cards";
import { useNavigate } from "react-router-dom";
const Roadmaps = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  const getUserData = async () => {
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(collection(db, "Paths"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    setData([]);
    querySnapshot.forEach((doc) => {
      setData((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap justify-center gap-5">
        {data &&
          data?.map((item, index) => {
            return (
              <Cards
                key={index}
                days={item.userSelection.days}
                level={item.userSelection.level}
                tech={item.userSelection.tech}
                img={user.profilePic}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Roadmaps;
