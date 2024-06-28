import Image from "next/image";
import React from "react";
import snapchat from "@/public/snapchat.svg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white p-10 flex flex-col items-center text-center shadow-lg rounded-md">
          <Image src={snapchat} alt="snapchat" width={70} height={70} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
