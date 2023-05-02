import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ChatInput() {
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 "
          type="text"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 " />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
