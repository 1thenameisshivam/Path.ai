import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
