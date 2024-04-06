export default function Member({ letter }) {
  return (
    <div className="bg-gray-600 rounded-full min-w-16 min-h-16 flex items-center justify-center">
      <span className="text-white text-xl font-bold">{letter}</span>
    </div>
  );
}
