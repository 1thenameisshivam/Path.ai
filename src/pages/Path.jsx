import { useParams } from "react-router-dom";
const Path = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Path</div>;
};

export default Path;
