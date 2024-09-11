import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
