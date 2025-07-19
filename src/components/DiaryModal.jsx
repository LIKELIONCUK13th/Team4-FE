import React, { useState, useEffect } from "react";
import Friend from "../pages/Friend";
import { Navigate, useNavigate } from "react-router-dom";

const DiaryModal = ({ isOpen, onClose, onSubmit }) => {
  const [text, setText] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [sharedFriends, setSharedFriends] = useState([]);
  const [weather, setWeather] = useState("날씨 정보를 불러오는 중...");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  useEffect(() => {
    if (!isOpen) return;

    const fetchWeather = async () => {
      try {
        const getCurrentPositionAsync = () => {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };

        let position;
        try {
          position = await getCurrentPositionAsync();
        } catch (geoError) {
          console.error("위치 권한 문제:", geoError);
          setWeather("위치 정보를 불러올 수 없습니다.");
          return;
        }
        const { latitude, longitude } = position.coords;

        const apiKey = "1159cda66dead7fb1c4cea95f1c0b441";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`
        );

        if (!response.ok) {
          throw new Error("날씨 API 호출 실패");
        }
        const data = await response.json();

        const desc = data.weather[0].description;
        const temp = data.main.temp;

        setWeather(`현재 날씨: ${desc}, ${temp}°C`);
      } catch (err) {
        console.error(err);
        setWeather("날씨 정보를 불러오지 못했습니다.");
      }
    };
    fetchWeather();
  }, [isOpen]);

  const handleImageUpload = (e) => {
    const images = Array.from(e.target.files).slice(
      0,
      3 - selectedImages.length
    );
    setSelectedImages((prev) => [...prev, ...images]);
  };

  const handleRemoveImage = (index) => {
    const images = [...selectedImages];
    images.splice(index, 1);
    setSelectedImages(images);
  };

  const handleAddFriend = () => {
    if (selectedFriend && !sharedFriends.includes(selectedFriend)) {
      setSharedFriends([...sharedFriends, selectedFriend]);
      setSelectedFriend("");
    }
  };

  const handleRemoveFriend = (friend) => {
    setSharedFriends(sharedFriends.filter((f) => f !== friend));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-lg space-y-10 overflow-y-auto max-h-[90vh]">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <p className="text-lg front-semibold text-orange-400">
              오늘의 일기
              <br />
              공유 완료! 🎉
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
                navigate("/");
              }}
              className="px-4 py-2 bg-orange-300 hover:bg-orange-400 text-white rounded"
            >
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="text-md text-gray-600 font-semibold">{weather}</div>

            <textarea
              className="w-full h-40 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="오늘 하루는 어떠셨나요? 소중한 순간들을 기록해보세요."
              maxLength={1000}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-600">
                사진 첨부
              </div>
              <div className="flex gap-2">
                {selectedImages.map((img, idx) => (
                  <div key={idx} className="relative w-20 h-20">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`img-${idx}`}
                      className="w-20 h-20 object-cover rounded-m"
                    />
                    <button
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute top-1 right-1 bg-black bg-opacity-50 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-opacity-80"
                    >
                      x
                    </button>
                  </div>
                ))}
                {selectedImages.length < 3 && (
                  <label className="w-20 h-20 border-2 border-dashed border-orange-300 rounded-md flex items-center justify-center cursor-pointer text-orange-400 text-2xl">
                    +
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                <span>친구 선택</span>
                <button
                  onClick={handleAddFriend}
                  className="text-sm bg-orange-300 text-white px-3 py-1 rounded hover:bg-orange-400"
                >
                  추가하기
                </button>
              </div>
              <select
                value={selectedFriend}
                onChange={(e) => setSelectedFriend(e.target.value)}
                className="w-full border border-orange-200 rounded-full p-2 bg-orange-50 focus:outline-none focus:ring-orange-300"
              >
                <option value="">공유할 친구 선택</option>
                <option value="friend1">김사자</option>
                <option value="friend2">이사자</option>
                <option value="friend3">박사자</option>
              </select>

              {sharedFriends.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {sharedFriends.map((friend, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-orange-50 p-2 rounded"
                    >
                      <span>{friend}</span>
                      <button
                        onClick={() => handleRemoveFriend(friend)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                취소
              </button>
              <button
                onClick={() => {
                  onSubmit({
                    text,
                    images: selectedImages,
                    friend: sharedFriends,
                  });
                  setText("");
                  setSelectedImages([]);
                  setSelectedFriend("");
                  setSharedFriends([]);
                  setIsSubmitted(true);
                }}
                disabled={
                  text.trim().length === 0 || sharedFriends.length === 0
                }
                className={`px-4 py-2 rounded text-white ${
                  text.trim().length === 0 || sharedFriends.length === 0
                    ? "bg-orange-200 cursor-not-allowed"
                    : "bg-orange-400 hover:bg-orange-500"
                }`}
              >
                보내기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiaryModal;
