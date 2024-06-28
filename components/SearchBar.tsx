import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-[#E3E6E8] rounded-xl px-2 py-3" >
      <SearchIcon/>
        <input type="text" placeholder="Search or start new chat" className="bg-transparent outline-none w-full"/>
      </div>
    </div>
  );
};

export default SearchBar;
