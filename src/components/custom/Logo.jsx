import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <span className="text-red-500 text-2xl">Path</span>.
      <span className="text-2xl">ai</span>
    </div>
  );
};

export default Logo;
