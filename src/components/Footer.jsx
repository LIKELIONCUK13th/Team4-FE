import { NavLink } from "react-router-dom";
import { Home, Book, Users, User } from "lucide-react";

/* 화면 바닥에 고정하는 footer (홈, 일기함, 친구 관리, 프로필) */
const Footer = () => {
  /* 메뉴바: 홈 / 일기함 / 친구 관리 / 프로필 (아이콘, 경로, 이름) */
  const menubar = [
    { icon: <Home />, path: "/", label: "홈" },
    { icon: <Book />, path: "/archive", label: "일기함" },
    { icon: <Users />, path: "/friend", label: "친구 관리" },
    { icon: <User />, path: "/profile", label: "프로필" },
  ];

  return (
    /* 요소 화면 바닥에 고정 / 왼쪽 고정 / 가로 너비 꽉 차게 / 흰 배경 / top 테두리 / 테두리 연한 회색 / 앞에 오는 요소가 되도록 */
    <footer className="fixed bottom-0 left-0 w-full bg-white border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {menubar.map(({ icon, path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-orange-400" : "text-orange-300"
              }`
            }
          >
            <div className="w-6 h-6">{icon}</div>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
