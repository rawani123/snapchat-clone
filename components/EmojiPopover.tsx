import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { EmojiArray } from "@/lib/emoji"
import Image from "next/image"
import { MdEmojiEmotions } from "react-icons/md"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={'icon'} className="rounded-full" variant="outline">
            <MdEmojiEmotions size={'24px'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-4 flex-wrap items-center">
        {
            EmojiArray.map((emoji,index)=>{
                return (
                   <div key={index}  className="cursor-pointer scale-90 hover:scale-110 transition-transform duration-100">
                        <Image src={emoji.src} alt={emoji.alt} width={35} height={35} />
                   </div>
                )
            
            })
        }
        </div>
      </PopoverContent>
    </Popover>
  )
}
