'use server'
import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import Message, { MessageDocument } from "@/models/message.model";
import { redirect } from "next/navigation";

import {v2 as cloudinary} from 'cloudinary'
import connectDB from "./db";
import { revalidatePath } from "next/cache";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const sendSnap =async(content:string,receiverId:string,messageType:'image'|'text')=>{
    try {
        await connectDB();
        const authUser=await auth()
        const senderId=authUser?.user?._id;

        let uploadImage;
        if(messageType==='image'){
            uploadImage=await cloudinary.uploader.upload(content)
        }
        const newMessage= await Message.create({
            senderId,
            receiverId,
            content:uploadImage?.secure_url || content,
            messageType
        })

        let chat=await Chat.findOne({participants:{$all:[senderId,receiverId]}})
        if(!chat){
            chat=await Chat.create({
                participants:[senderId,receiverId],
                messages:[newMessage._id]
            })
        }else{
            chat.messages.push(newMessage?._id)
            await chat.save()
        }
        revalidatePath(`/chat/${receiverId}`)

        return JSON.parse(JSON.stringify(newMessage))

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteChat=async(userId:string)=>{
    try {
        await connectDB();
        const authUser=await auth()
        if(!authUser) return;
        const senderId=authUser?.user?._id;

        const chat = await Chat.findOne({participants:{$all:[senderId,userId]}})
        console.log(chat);
        if(!chat) return;

        const messageInString = chat.messages.map((messageId)=>messageId.toString());
        await Message.deleteMany({_id:{$in:messageInString}})
        await Chat.deleteOne({_id:chat._id})

    } catch (error) {
        console.log(error)
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