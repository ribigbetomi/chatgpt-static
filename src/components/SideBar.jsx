import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import { useEffect, useState } from "react";
import { chats as chatss } from "../chats";

function SideBar({ id }) {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const neww = chatss
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .filter((item) => item.messages.length !== 0);
    setChats(neww);
  }, [chatss]);

  return (
    <div className="p-2 flex flex-1 flex-col h-screen ">
      <div className="flex-1">
        <NewChat />

        <div className="flex flex-col space-y-2 my-2">
          {!chats && (
            <div className="animate-pulse text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}

          {chats?.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} paramsID={id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1069054433315692544/wzurle56_400x400.jpg"
          alt="profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
        <div className="text-white cursor-pointer">Logout</div>
      </div>
    </div>
  );
}

export default SideBar;
