import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { chats as chatss } from "../chats";

function ChatRow({ id, paramsID }) {
  const [active, setActive] = useState(false);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const find = chatss.find((item) => item.id === id);
    setMessages(
      find.messages.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      )
    );
  }, [chatss]);

  useEffect(() => {
    if (!paramsID) return;

    setActive(paramsID === id);
  }, [paramsID, id]);

  return (
    <a
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages[messages?.length - 1]?.text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </a>
  );
}

export default ChatRow;
