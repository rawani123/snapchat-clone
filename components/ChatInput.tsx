"use client"
import React,{useState} from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Button } from "./ui/button";
import { PopoverDemo } from "./EmojiPopover";
import { sendSnap } from "@/lib/serveractions";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const ChatInput = () => {
  const params = useParams<{id:string}>();
  const receiverId=params.id;
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      setLoading(true);
      await sendSnap(input,receiverId,'text');
      setInput('');
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="p-2 cursor-pointer bg-gray-200 rounded-full">
        <MdPhotoCamera size={"24px"} />
      </div>
      <form action="" className="w-full" onSubmit={onSubmit}>
        <div className="flex items-center justify-center gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Send a snap message"
            className="rounded-full w-full border border-gray-400 p-2 outline-none font-medium"
          />
          {
            loading ? (<>
            <Button className="rounded-full">
              <Loader2 className="mr-2  h-4 w-4 animate-spin"/>Please wait
            </Button>
            </>):(
              <Button type="submit" className="rounded-full">Send snap</Button>
            )
          }
          
        </div>
      </form>
      <div>
        <PopoverDemo />
      </div>
    </div>
  );
};

export default ChatInput;
