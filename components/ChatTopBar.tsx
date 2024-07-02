"use client";

import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { deleteChatMessages } from "@/lib/serveractions";
import { useParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

const ChatTopBar = ({ userProfile }: { userProfile: any }) => {
  const { id } = useParams<{ id: string }>();
  const deleteChatHandler = deleteChatMessages.bind(null, id);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/chat">
          <ArrowBigLeft />
        </Link>
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src={userProfile.profilePhoto} alt="user" />
          </Avatar>
          <h1 className="font-bold">{userProfile.fullname}</h1>
        </div>
      </div>
      <form action={deleteChatHandler}>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChatTopBar;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return <Button variant={"destructive"}>{
    !pending ? (
      "clear chat"):(
        <Button variant={"destructive"}>
          Please Wait
        </Button>
      )
    
  }</Button>;
};
