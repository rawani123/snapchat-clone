'use server'
import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import Message from "@/models/message.model";
import { redirect } from "next/navigation";

export const sendSnap =async(image:string,receiverId:string,messageType:'image'|'text')=>{
    try {
        const authUser=await auth()
        const senderId=authUser?.user?._id;
        const newMessage= await Message.create({
            senderId,
            receiverId,
            content:"img url",
            messageType
        })

        let chat=await Chat.findOne({participants:{$all:[senderId,receiverId]}})
        if(!chat){
            chat=await Chat.create({
                participants:[senderId,receiverId],
                messages:[newMessage._id]
            })
        }else{
            chat.messages.push(newMessage._id)
            await chat.save()
        }

        return JSON.parse(JSON.stringify(newMessage))

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const logoutHandler = async () => {
    'use server'
    try{
        await signOut();
    }
    catch(err){
        console.log(err);
        throw err;
    }
    redirect('/login')
}