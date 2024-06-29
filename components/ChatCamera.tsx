"use client"
import { CameraIcon } from "lucide-react";
import React, { useRef } from "react";

const ChatCamera = () => {
    const imageRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <div className="flex flex-col items-center justify-center m-2 rounded-md bg-clip-padding backdrop-blur-sm bg-opacity-5 border p-5">
        <div onClick={()=> imageRef.current?.click()} className="rounded-full p-8 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 cursor-pointer text-white">
            <CameraIcon size={'50px'}/>
            <input ref={imageRef} type="file" accept="image/" hidden /> 
        </div>
        <p className="w-2/3 text-center text-white mt-4 font-semibold text-lg">Lets send your first snap.</p>
      </div>
    </>
  );
};

export default ChatCamera;
