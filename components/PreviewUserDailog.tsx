"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { UserDocument } from "@/models/user.model";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Loader2 } from "lucide-react";

function UserDailog({
  selectedFile,
  close,
  onPreview,
}: {
  selectedFile: string;
  close: () => void;
  onPreview: () => void;
}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDocument>();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/chat/getusers");
        const jsonData = await res.json();
        setUsers(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const onSelectedUser= (user:UserDocument)=>{
    setSelectedUser(user);
  }

  
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl  flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Input
              type="text"
              placeholder="Search user to send snap"
              id="name"
            />
          </div>
        </DialogHeader>
        <div className="grid gap-1 py-4">
          {
            users.map((user:UserDocument)=>{
              return (
                <div onClick={()=>onSelectedUser(user)} className={`${selectedUser?.id === user._id ? 'bg-gray-200':null} flex items-center gap-5 cursor-pointer p-2 rounded-md hover:bg-gray-200`}>
                  <Avatar>
                    <AvatarImage src={user.profilePhoto} alt={'user'}/>
                  </Avatar>
                  <div>
                    <h1 className="font-medium">{user.fullname}</h1>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                  </div>
                </div>
              )
            })
          }

          {
            loading &&
            <div className="mx-auto">
              <Loader2 className="mr-2 h-4 w-4 animate-spin"/> 
            </div>
          }
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UserDailog;
