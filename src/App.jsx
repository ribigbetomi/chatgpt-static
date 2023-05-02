import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./screens/HomePage";
import ChatScreen from "./screens/ChatScreen";
import { MenuOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const App = () => {
  const { id } = useParams();
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <>
      <div className="sticky h-14 bg-[#343541] border-b border-b-slate-600 md:hidden">
        <button
          className="absolute md:hidden left-2 top-3 bg-white p-2 pt-0 items-center"
          onClick={() => setActiveMenu(true)}
        >
          <MenuOutlined />
        </button>
      </div>
      <div className="flex">
        {activeMenu && screenSize > 768 && (
          <div
            className="bg-[#202123] max-w-xs h-screen
        overflow-y-auto md:min-w-[20rem]"
          >
            <SideBar id={id} />
          </div>
        )}
        {activeMenu && screenSize < 768 && (
          <>
            <div
              className="bg-[#202123] h-screen
          overflow-y-auto overflow-hidden z-50 absolute left-0 top-0 flex-1"
            >
              <SideBar id={id} />
            </div>
            <button
              onClick={() => setActiveMenu(false)}
              className="absolute z-50 top-2 left-40 bg-white items-center p-2 pt-0"
            >
              <ArrowLeftOutlined />
            </button>
          </>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:id" element={<ChatScreen />} exact />
        </Routes>
      </div>
    </>
  );
};

export default App;
