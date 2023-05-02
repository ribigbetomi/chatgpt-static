import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
// import { collection, orderBy, query } from "firebase/firestore";
// import { useSession } from "next-auth/react";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { db } from "../firebase";
import Message from "./Message";
import { chats as chatss } from "../chats";
import { useEffect, useState } from "react";

function Chat({ chatId }) {
  console.log(chatId);
  // const { data: session } = useSession();
  // const [messages] = useCollection(
  //   session &&
  //     query(
  //       collection(
  //         db,
  //         "users",
  //         session?.user?.email,
  //         "chats",
  //         chatId,
  //         "messages"
  //       ),
  //       orderBy("createdAt", "asc")
  //     )
  // );
  const [messages, setMessages] = useState([]);
  console.log(chatss, "chatss");

  useEffect(() => {
    const find = chatss.find((item) => item.id === chatId);

    if (find.messages.length !== 0) {
      setMessages(
        find.messages.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      );
    } else {
      setMessages([]);
    }
  }, [JSON.stringify(chatss)]);

  return (
    <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
      {messages.length === 0 && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Chat;
