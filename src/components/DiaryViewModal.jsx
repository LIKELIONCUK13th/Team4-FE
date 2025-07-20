const DiaryViewModal = ({ isOpen, onClose, diary }) => {
  if (!isOpen || !diary) return null;

  const { author, date, text, images } = diary;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg space-y-4 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800"></h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            닫기 x
          </button>
        </div>

        <div className="text-sm text-gray-600">
          작성자: <span className="font-medium">{author}</span>
        </div>
        <div className="text-sm text-gray-600">
          날짜: <span className="font-medium">{date}</span>
        </div>

        <div className="text-gray-700 whitespace-pre-wrap">{text}</div>

        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={typeof img === "string" ? img : URL.createObjectURL(img)}
                alt={`diary-img-${idx}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryViewModal;
