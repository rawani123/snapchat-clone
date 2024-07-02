"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { EmojiArray } from "@/lib/emoji"
import { sendSnap } from "@/lib/serveractions"
import { readFileAsDataURL } from "@/lib/utils"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { MdEmojiEmotions } from "react-icons/md"

export function PopoverDemo() {
  const [loading ,setLoading]=useState(false)
  const {id}= useParams<{id:string}>()

  const handleSendEmoji=async (srcURl:string)=>{
    try {
      setLoading(false)
      const blob = await fetch(srcURl).then((res:any)=>{
        res.blob()
      })
      const dataUrl = await readFileAsDataURL(blob!)
      await sendSnap(dataUrl,id,"image")
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }

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
                   <div key={index} onClick={()=>handleSendEmoji(emoji.src)}  className="cursor-pointer scale-90 hover:scale-110 transition-transform duration-100">
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
