import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-md px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && submitHandler();
            }}
            type="text"
            style={{ resize: "none" }}
            rows={1}
            value={value}
            className="border-0 bg-transparent outline-none w-11/12"
            onChange={(e) => setValue(e.target.value)}
          />
          <AiOutlineSend
            onClick={submitHandler}
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-122 hover:scale-125"
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
