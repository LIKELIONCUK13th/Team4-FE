import { Bell, CircleQuestionMark, MessageSquareMore, User } from "lucide-react";

const Profile = () => {
  // 2x2 메뉴 아이템과 아이콘 매핑
  const menuItems = [
    { label: "계정 설정", icon: <User className="mx-auto mb-2 w-6 h-6 text-gray-500" /> },
    { label: "공지사항", icon: <Bell className="mx-auto mb-2 w-6 h-6 text-gray-500" /> },
    { label: "자주 묻는 질문", icon: <CircleQuestionMark className="mx-auto mb-2 w-6 h-6 text-gray-500" /> },
    { label: "1:1 문의", icon: <MessageSquareMore className="mx-auto mb-2 w-6 h-6 text-gray-500" /> },
  ];

  return (
    <div className="pt-24 pb-32 px-4 flex justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* 상단 프로필 박스 */}
        <div className="w-full bg-white rounded-2xl shadow p-6 flex flex-col items-center mb-10">
          {/* 프로필 이미지 */}
          <div className="w-24 h-24 rounded-full bg-orange-200 mb-4" />
          {/* 사용자 이름 */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">아기사자 님</h2>
          {/* 일기 개수와 친구 수 */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <div className="flex flex-col items-center">
              <span className="font-semibold">12</span>
              <span>일기</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold">5</span>
              <span>친구</span>
            </div>
          </div>
        </div>

        {/* 2x2 메뉴 */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {menuItems.map(({ label, icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow py-6 text-center text-sm font-medium text-gray-700"
            >
              {icon}
              {label}
            </div>
          ))}
        </div>

        {/* 로그아웃 버튼 */}
        <button className="mt-10 w-full bg-red-500 text-white py-3 rounded-xl text-sm font-semibold shadow">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Profile;
