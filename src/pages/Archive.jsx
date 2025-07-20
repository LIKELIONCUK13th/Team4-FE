import DiaryThumbnail from "../components/DiaryThumbnail";
import { useNavigate } from "react-router-dom";
import { sampleMyDiaries, sampleReceivedDiaries } from "../data/DiarySample";

const Archive = () => {
  const navigate = useNavigate();

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
          {sampleMyDiaries.slice(0, 4).map((diary) => (
            <DiaryThumbnail
              key={diary.id}
              date={diary.date}
              to={["아기사자"]}
              type="sent"
            />
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
          {sampleReceivedDiaries.slice(0, 4).map((diary) => (
            <DiaryThumbnail
              key={diary.id}
              date={diary.date}
              from={diary.author}
              type="received"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Archive;
