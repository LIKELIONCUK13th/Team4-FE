import DiaryThumbnail from "../components/DiaryThumbnail";
import { useNavigate } from "react-router-dom";

const Archive = () => {
  const navigate = useNavigate();

  const myDiaries = [
    { id: 1, date: "2025-07-19" },
    { id: 2, date: "2025-07-18" },
    { id: 3, date: "2025-07-17" },
    { id: 4, date: "2025-07-16" },
  ];

  const receivedDiaries = [
    { id: 1, date: "2025-07-19", from: "김사자" },
    { id: 2, date: "2025-07-18", from: "박사자" },
    { id: 3, date: "2025-07-17", from: "이사자" },
    { id: 4, date: "2025-07-16", from: "최사자" },
  ];

  return (
    <main className="p-6 space-y-10 bg-orange-50 min-h-screen">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-orange-400">
            최근 작성한 일기
          </h2>
          <button
            onClick={() => navigate("/my-diaries")}
            className="text-sm text-orange-400 hover:underline"
          >
            전체보기
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {myDiaries.slice(0, 4).map((diary) => (
            <DiaryThumbnail key={diary.id} date={diary.date} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-orange-400">최근 받은 일기</h2>
          <button
            onClick={() => navigate("/received-diaries")}
            className="text-sm text-orange-400 hover:underline"
          >
            전체보기
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {receivedDiaries.slice(0, 4).map((diary) => (
            <DiaryThumbnail
              key={diary.id}
              date={diary.date}
              from={diary.from}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Archive;
