import { Chat } from "@/models/chat.model"
import connectDB from "./db"
import { model } from "mongoose";

export const getMessage = async(loggedInUserId:string,otherUserId:string)=>{
    try {
        await connectDB()
        const chatMessage = await Chat.findOne({participants:{$all:[loggedInUserId,otherUserId]}}).populate({
            path:'messages',
            populate:{
                path:'senderId',
                model:'User',
                select:'fullname'
            }
        });

        if(!chatMessage) return [];
        return JSON.parse(JSON.stringify(chatMessage.messages))

    } catch (error) {
        console.log(error)
        throw error
    }
}