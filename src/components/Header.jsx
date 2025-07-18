import { Bell } from "lucide-react";

const Header = () => {
  const headerbar = [
    { position: "left", element: <div /> },
    {
      position: "center",
      element: (
        <span className="text-xl font-semibold text-orange-300">Snapzy</span>
      ),
    },
    {
      position: "right",
      element: <Bell className="w-6 h-6 text-orange-300" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-gray-200 z-50">
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
