import React from "react";
import MyAi from "@/public/myai-asset.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaLaptop } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/auth";
import { AiOutlineMessage } from "react-icons/ai";

const Header = async () => {
  const authUser = await auth();
  // console.log(authUser);
  return (
    <div className="flex justify-center items-center max-w-6xl mx-auto">
      <div>
        <div className="text-7xl font-medium">
          Snapchat is
          <br /> now on the <br /> web!
        </div>
        <div className="my-4 text-xl ">
          Chat, Snap, and video call your friend from wherever you are.
        </div>
        {authUser ? (
          <Link href={"/chat"}>
            <Button className=" gap-2 rounded-full">
              <AiOutlineMessage size={'18px'}/> Start Chat
            </Button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <Button className=" gap-2 rounded-full">
              <FaLaptop /> Login to Chat
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Image src={MyAi} height={650} width={650} alt="snapchat" />
      </div>
    </div>
  );
};

export default Header;
