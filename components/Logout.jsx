import React from "react";
import { Button } from "./ui/button";
import { IoMdLogOut } from "react-icons/io";
import { logoutHandler } from "@/lib/serveractions";

const Logout = async () => {
    
  return (
    <form action={logoutHandler}>
      <Button className="rounded-full">
        <IoMdLogOut size={"18px"} /> 
      </Button>
    </form>
  );
};

export default Logout;
