import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  
} from "@/components/ui/dialog";

import Image from "next/image";
import { Input } from "./ui/input";

function UserDailog({
  selectedFile,
  close,
  onPreview,
}: {
  selectedFile: string;
  close: () => void;
  onPreview: () => void;
}) {
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UserDailog;
