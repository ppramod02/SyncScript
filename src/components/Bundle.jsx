import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function Bundle() {
  return (
    <div className="px-[5rem] h-full w-full">
      <Navbar />

      <Outlet />
    </div>
  );
}
