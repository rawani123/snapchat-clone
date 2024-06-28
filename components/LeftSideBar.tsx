import React from "react";
import Logout from "./Logout";
import { auth } from "@/auth";
import { Avatar, AvatarImage } from "./ui/avatar";
import SearchBar from "./SearchBar";
import Friends from "./Friends";


const LeftSideBar = async () => {
  const authUser = await auth();
  return (
    <div className="w-[50%] md:w-[25%] m-2 border-2 border-gray-300 rounded-lg">
      <div className="flex items-center p-4 justify-between border-b border-gray-300 pb-3">
        <div className="flex items-center gap-2">
          {authUser && (
            <>
              <Avatar>
                <AvatarImage
                  src={authUser.user?.image!}
                  alt={authUser.user?.name!}
                />
              </Avatar>
              <h1 className="font-medium ">{authUser.user?.name}</h1>
            </>
          )}
        </div>
        <div>
          <Logout />
        </div>
      </div>
      <div className="p-2">
        
        <SearchBar/>
        <Friends/>
      </div>
    </div>
  );
};

export default LeftSideBar;
