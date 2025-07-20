import React, { useState } from "react";
import treeImage from "../assets/treeImage.png";
import unopenedLetterImage from "../assets/unopenedLetterImage.png";
import openedLetterImage from "../assets/openedLetterImage.png";
import { sampleReceivedDiaries } from "../data/DiarySample";
import { Plus } from "lucide-react";
import DiaryModal from "../components/DiaryModal";
import DiaryViewModal from "../components/DiaryViewModal";

const letterLocations = [
  { top: "20%", left: "30%" },
  { top: "25%", left: "60%" },
  { top: "40%", left: "40%" },
  { top: "50%", left: "65%" },
  { top: "60%", left: "30%" },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState(null);
  const [diaries, setDiaries] = useState(sampleReceivedDiaries);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDiarySubmit = (data) => {
    console.log("제출 내용: ", data);
  };

  const handleOpenLetter = (id) => {
    const diary = diaries.find((d) => d.id === id);
    setSelectedDiary(diary);
    setIsViewModalOpen(true);

    setDiaries((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isOpened: true } : d))
    );
  };

  return (
    <main className="flex flex-col h-screen bg-orange-50 w-full overflow-hidden px-4 sm:px-8 relative">
      <div className="w-full text-center mt-3 sm:mt-4">
        <p className="text-base sm:text-lg text-orange-300 font-bold">
          안녕하세요 아기사자님! 🦁
          <br />
          오늘도 소중한 일상을 나눠보세요.
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <img
          src={treeImage}
          alt="나무이미지"
          className="object-contain max-h-[70vh] w-auto"
        />

        {diaries.slice(0, 5).map((diary, idx) => (
          <img
            key={diary.id}
            src={diary.isOpened ? openedLetterImage : unopenedLetterImage}
            alt="나무 편지"
            onClick={() => handleOpenLetter(diary.id)}
            className="absolute w-10 h-10 cursor-pointer transition-transform hover:scale-110"
            style={letterLocations[idx]}
          />
        ))}
      </div>

      <button
        onClick={handleOpenModal}
        className="fixed bottom-24 right-4 bg-orange-300 hover:bg-orange-400 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
      >
        <Plus className="w-8 h-8" />
      </button>

      {isModalOpen && (
        <DiaryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleDiarySubmit}
        />
      )}

      {isViewModalOpen && selectedDiary && (
        <DiaryViewModal
          isOpen={isViewModalOpen}
          diary={selectedDiary}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Home;
