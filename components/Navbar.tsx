import React from "react";
import snapchat from "@/public/snapchat.svg";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-2">
        <Image src={snapchat} width={50} height={50} alt="snapchat" />
        <Input placeholder="Search" type="text" className="rounded-full" />
      </div>
      <div>
        <Button variant={'ghost'}>Stories</Button>
        <Button variant={'ghost'}>Spotlight </Button>
        <Button variant={'ghost'}>Chat</Button>
        <Button variant={'ghost'}>Lenses</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button size={'icon'}variant={'secondary'} className="rounded-full bg-white text-black"><TbGridDots/></Button>
        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full" >Download</Button>
        <Button size={'icon'} className="rounded-full" ><IoMdLogOut size={'18px'}/></Button>
      </div>
    </div>
  );
};

export default Navbar;
