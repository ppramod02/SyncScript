export default function Member({ username, currUser }) {
  const background = currUser ? 'bg-primary' : '';
  return (
    <div className={`py-2 px-3 ${background} bg-opacity-20 rounded-lg hover:bg-opacity-30 w-full`}>
      <span className="text-primary font-light">{ username }</span>
    </div>
  );
}
