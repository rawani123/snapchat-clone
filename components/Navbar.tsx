import React from "react";
import snapchat from "@/public/snapchat.svg";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import Logout from "./Logout";
import { auth } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
  const authUser = await auth();
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-2">
        <Image src={snapchat} width={50} height={50} alt="snapchat" />
        <Input placeholder="Search" type="text" className="rounded-full" />
      </div>
      <div>
        <Button variant={"ghost"}>Stories</Button>
        <Button variant={"ghost"}>Spotlight </Button>
        <Button variant={"ghost"}>Chat</Button>
        <Button variant={"ghost"}>Lenses</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="rounded-full bg-white text-black"
        >
          <TbGridDots />
        </Button>
        <Button className="rounded-full ">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
        {authUser ? (
          <Logout />
        ) : (
          <Link href="/login">
          <Button className="rounded-full">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
