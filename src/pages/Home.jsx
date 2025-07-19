import React, { useState } from "react";
import treeImage from "../assets/treeImage.png";
import { Plus } from "lucide-react";
import DiaryModal from "../components/DiaryModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDiarySubmit = (data) => {
    console.log("제출 내용: ", data);
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
    </main>
  );
};

export default Home;
