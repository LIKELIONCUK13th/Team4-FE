import { Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Friend from "./pages/Friend";
import Profile from "./pages/Profile";
import Notfound from "./pages/Notfound";

// 1. "/" : 편지 달린 나무가 보이는 Home 페이지(오늘 도착한 일기만 보여줌, 나무)
// 2. "/new" : 상대에게 보낼 일기를 작성하는 New 페이지 -> 모달 컴포넌트 활용
// 3. "/archive" : 편지를 보관해두는 Archive 페이지
// 4. "/friend" : 친구를 추가, 관리, 삭제하는 Friend 페이지 -> 윤아 담당
// 5. "/profile" : 본인의 프로필을 관리하는 Profile 페이지 -> 윤아 담당
// Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능
function App() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
