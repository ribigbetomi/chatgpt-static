import { useState } from "react";
import Chat from "../components/Chat";
import ChatInput from "../components/ChatInput";
import { useParams } from "react-router-dom";

function ChatScreen() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flex flex-1 flex-col h-screen overflow-hidden bg-[#343541]">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatScreen;
