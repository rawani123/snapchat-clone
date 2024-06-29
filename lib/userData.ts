import Message from "@/models/message.model";
import User from "@/models/user.model";

export const getSideBarUsers=async(loggedInUserId:string)=>{
    try {
        const otherUser = await User.find({_id:{$ne:loggedInUserId}});
        const userInfo = await Promise.all(
            otherUser.map(async(user)=>{
                const lastMessage = await Message.findOne({
                    $or:[
                       {senderId:user._id,receiverId:loggedInUserId},
                          {senderId:loggedInUserId,receiverId:user._id}
                    ]
                }).sort({createdAt:-1}).populate("senderId",'fullname profilePhoto _id')
                .populate("receiverId",'fullname profilePhoto _id').exec();
                return {
                    _id:user._id,
                    participants:[user],
                    lastMessage:lastMessage ? {
                        ...lastMessage.toJSON(),
                        senderId:lastMessage.senderId,
                        receiverId:lastMessage.receiverId
                    }:null
                };
            })
        )
        return userInfo;

    } catch (error) {
        console.log(error)
        throw error;
    }
}