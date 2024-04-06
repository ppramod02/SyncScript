export default function Navbar() {
  return (
    <div className="text-primary font-poppins font-extralight flex items-center justify-between py-5 px-5 sm:px-[1px]">
      <div className="text-2xl sm:text-3xl uppercase">SyncSpace</div>
      <div className="sm:text-xl text-sm flex sm:space-x-10 space-x-2 items-center">
        <p>about</p>

        <p>github</p>
      </div>
    </div>
  );
}
