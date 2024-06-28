import mongoose, { Model, PopulatedDoc, Types } from "mongoose";
import { UserDocument } from "./user.model";

export interface Message{
    senderId: Types.ObjectId | PopulatedDoc<UserDocument>,
    receiverId: Types.ObjectId | PopulatedDoc<UserDocument>,
    content: string,
    messageType: 'text' | 'image',
    opened: boolean
}

export interface MessageDocument extends Message, mongoose.Document{
    createdAt: Date,
    updatedAt: Date
}


const messageSchema = new mongoose.Schema<MessageDocument>({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content:{
        type: String,
        required: true
    },
    messageType:{
        type: String,
        required: true,
        enum: ['text','image']
    },
    opened:{
        type: Boolean,
        default: false
    }
},{timestamps:true});

const Message : Model<MessageDocument>= mongoose?.models?.Message || mongoose.model('Message', messageSchema);

export default Message;