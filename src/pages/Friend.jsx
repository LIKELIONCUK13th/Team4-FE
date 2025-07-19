import React, { useState } from "react";

const Friend = () => {
  const [view, setView] = useState("list"); // 현재 화면 상태

  return (
    <div className="p-4 pb-32 pt-4 max-w-md mx-auto relative bg-gray-50 min-h-screen">
      {/* 상단 오른쪽에 친구 요청함 버튼 */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => setView("requests")}
          className="text-sm text-blue-500 font-semibold"
        >
          친구 요청함 →
        </button>
      </div>

      {/* 친구 검색창 + 버튼 */}
      {(view === "list" || view === "delete") && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="친구 검색"
            className="w-full p-2 border border-gray-300 rounded-xl mb-2"
          />
          <div className="flex justify-end space-x-2">
            {view === "list" ? (
              <>
                <SmallColoredButton
                  label="친구 수정"
                  color="red-200"
                  onClick={() => setView("delete")}
                />
                <SmallColoredButton
                  label="친구 추가"
                  color="blue-200"
                  onClick={() => setView("add")}
                />
              </>
            ) : (
              <SmallColoredButton
                label="← 돌아가기"
                color="gray-200"
                onClick={() => setView("list")}
              />
            )}
          </div>
        </div>
      )}

      {/* 화면 렌더링 */}
      {view === "list" && <FriendList />}
      {view === "requests" && <FriendRequests onBack={() => setView("list")} />}
      {view === "add" && <FriendAdd onBack={() => setView("list")} />}
      {view === "delete" && <FriendDelete onBack={() => setView("list")} />}

      {/* Footer 바로 위 고정 위치 친구 요청함 버튼 */}
      <div className="fixed bottom-28 right-4 z-10">
        <button
          onClick={() => setView("requests")}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-xl shadow-md"
        >
          친구 요청함 →
        </button>
      </div>
    </div>
  );
};

export default Friend;

const SmallColoredButton = ({ label, color, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 text-sm rounded-lg bg-${color} text-gray-700`}
  >
    {label}
  </button>
);

const FriendList = () => {
  const friends = [
    {
      name: "김사자",
      email: "lion1@example.com",
      color: "bg-orange-200",
      sent: 3,
      received: 5,
    },
    {
      name: "박사자",
      email: "lion2@example.com",
      color: "bg-yellow-200",
      sent: 4,
      received: 6,
    },
  ];

  return (
    <div className="space-y-4">
      {friends.map((friend, i) => (
        <div
          key={i}
          className="flex items-center space-x-4 bg-white rounded-2xl shadow p-4"
        >
          <div className={`w-16 h-16 rounded-full ${friend.color}`} />
          <div className="flex flex-col justify-center text-sm text-gray-700">
            <span className="font-semibold">{friend.name}</span>
            <span className="text-gray-500">{friend.email}</span>
            <span className="text-gray-500">
              보낸 일기: {friend.sent} / 받은 일기: {friend.received}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const FriendRequests = ({ onBack }) => {
  return (
    <div className="space-y-4">
      <SmallColoredButton label="← 친구 관리" color="gray-200" onClick={onBack} />
      {[1, 2].map((i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white rounded-2xl shadow p-4"
        >
          <div className="flex space-x-4 items-center">
            <div className="w-14 h-14 bg-blue-200 rounded-full" />
            <div className="flex flex-col text-sm text-gray-700">
              <span className="font-semibold">요청자 {i}</span>
              <span className="text-gray-500">request{i}@mail.com</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-xs">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-xl">
              수락하기
            </button>
            <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-xl">
              거절하기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const FriendAdd = ({ onBack }) => {
  return (
    <div className="space-y-4">
      <SmallColoredButton label="← 친구 관리" color="gray-200" onClick={onBack} />
      <input
        type="text"
        placeholder="이메일로 검색"
        className="w-full p-2 border border-gray-300 rounded-xl mb-2"
      />
      <div className="flex items-center justify-between bg-white rounded-2xl shadow p-4">
        <div className="flex space-x-4 items-center">
          <div className="w-14 h-14 bg-green-200 rounded-full" />
          <div className="flex flex-col text-sm text-gray-700">
            <span className="font-semibold">새 친구</span>
            <span className="text-gray-500">new@email.com</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded-xl">
          추가
        </button>
      </div>
    </div>
  );
};

const FriendDelete = ({ onBack }) => {
  const friends = [
    {
      name: "김사자",
      email: "lion1@example.com",
      color: "bg-orange-200",
      sent: 3,
      received: 5,
    },
    {
      name: "박사자",
      email: "lion2@example.com",
      color: "bg-yellow-200",
      sent: 4,
      received: 6,
    },
  ];

  return (
    <div className="space-y-4">
      <SmallColoredButton label="← 친구 관리" color="gray-200" onClick={onBack} />
      {friends.map((friend, i) => (
        <div key={i} className="relative bg-white rounded-2xl shadow p-4">
          <div className="absolute top-2 right-3">
            <input type="radio" name="deleteFriend" />
          </div>
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-full ${friend.color}`} />
            <div className="flex flex-col text-sm text-gray-700">
              <span className="font-semibold">{friend.name}</span>
              <span className="text-gray-500">{friend.email}</span>
              <span className="text-gray-500">
                보낸 일기: {friend.sent} / 받은 일기: {friend.received}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold mt-4">
        친구 삭제
      </button>
    </div>
  );
};
