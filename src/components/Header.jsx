import { Bell } from "lucide-react";
import logo from "../assets/snapzy.png";

const Header = () => {
  const headerbar = [
    { position: "left", element: <div /> },
    {
      position: "center",
      element: <img src={logo} alt="Snapzy" className="h-12 object-contain" />,
    },
    {
      position: "right",
      element: <Bell className="w-7 h-7 text-orange-400" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {headerbar.map(({ position, element }) => (
          <div
            key={position}
            className={`flex items-center ${
              position === "left"
                ? "justify-start flex-1"
                : position === "center"
                ? "justify-center flex-1"
                : "justify-end flex-1"
            }`}
          >
            {element}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
