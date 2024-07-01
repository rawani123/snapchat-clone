"use client"
import React,{useState} from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Button } from "./ui/button";
import { PopoverDemo } from "./EmojiPopover";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");

  const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="p-2 cursor-pointer bg-gray-200 rounded-full">
        <MdPhotoCamera size={"24px"} />
      </div>
      <form action="" className="w-full">
        <div className="flex items-center justify-center gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Send a snap message"
            className="rounded-full w-full border border-gray-400 p-2 outline-none font-medium"
          />
          <Button type="submit" className="rounded-full">Send snap</Button>
        </div>
      </form>
      <div>
        <PopoverDemo />
      </div>
    </div>
  );
};

export default ChatInput;
