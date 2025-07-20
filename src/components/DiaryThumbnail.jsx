const DiaryThumbnail = ({ date, from }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 test-sm text-gray-700">
      <p className="font-semibold mb-2">{date}</p>
      {from && <p className="text-xs text-gray-500">from. {from}</p>}
    </div>
  );
};

export default DiaryThumbnail;
