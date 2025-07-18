import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
