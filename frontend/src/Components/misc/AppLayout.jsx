import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[18vw,82vw] grid-rows-[8vh,92vh] h-[100vh] noscroll">
      <Header />
      <Sidebar />
      <main className="flex justify-center bg-slate-50 overflow-scroll noscroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;


