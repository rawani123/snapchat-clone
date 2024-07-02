"use client";
import Image from "next/image";
import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface PREVIEWIMAGE {
  open: boolean;
  imgURl: string;
}

const ChatBody = ({ messages, authUser }: { messages: any; authUser: any }) => {
  const [previewImage, setPreviewImage] = React.useState<PREVIEWIMAGE>({
    open: false,
    imgURl: "",
  });
  return (
    <div className="flex-1 my-3 border-2 border-gray-200 overflow-y-auto p-2 rounded-lg ">
      {messages.map((message: any, index: number) => {
        const ME = message.senderId._id === authUser?.user?._id;
        // const ME = message.senderId._id !== authUser?.user?._id;
        const senderFullName = message?.senderId?.fullname.toUpperCase();
        const messageType = message.messageType === "image";
        const isPreviousMessageFromSameUser =
          index > 0 &&
          messages[index - 1].senderId._id === message.senderId._id;

        return (
          <>
            <div className="w-full" key={message._id}>
              {!isPreviousMessageFromSameUser && (
                <p
                  className={`font-bold mt-2 text-xs ${
                    ME ? "text-red-500" : "text-[#00b4d8]"
                  }`}
                >
                  {ME ? "Me" : senderFullName}
                </p>
              )}
              <div
                className={`border-l-2 ${
                  ME ? "border-l-red-500" : "border-l-[#00b4d8]"
                }`}
              >
                <div className="flex items-center w-1/2 p-2 rounded-sm">
                  {messageType ? (
                    <Image
                      src={message.content}
                      width={100}
                      height={100}
                      alt={"img"}
                      className="h-aut w-auto object-cover cursor-pointer"
                      onClick={() => setPreviewImage({ open: true, imgURl: message.content })}
                    />
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Dialog open={previewImage.open} onOpenChange={()=> setPreviewImage({open:false,imgURl:''})}>
        <DialogContent className="max-w-2xl h-96">
          {
            previewImage.imgURl && <Image src={previewImage.imgURl} fill={true} alt="img" className="border-2 border-white  rounded-lg" />
          }
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBody;
