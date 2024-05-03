export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className="border-primary h-[70%] flex items-center border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
      {title}
    </button>
  );
}
