const DiaryThumbnail = ({ date, from, to, type }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 test-sm text-gray-700">
      <p className="font-semibold mb-2">{date}</p>

      {type === "received" && from && (
        <p className="text-xs text-gray-500">from. {from}</p>
      )}
      {type === "sent" && to && (
        <p className="text-xs text-gray-500">
          to. {Array.isArray(to) ? to.join(", ") : to}
        </p>
      )}
    </div>
  );
};

export default DiaryThumbnail;
