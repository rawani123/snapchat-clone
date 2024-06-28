import mongoose, { Model } from "mongoose";


export interface Chat{
    participants: mongoose.Schema.Types.ObjectId[],
    messages: mongoose.Schema.Types.ObjectId[]
}

export interface ChatDocument extends Chat, mongoose.Document{
    createdAt: Date,
    updatedAt: Date
}

const chatSchema = new mongoose.Schema<ChatDocument>({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        }
    ]
},{timestamps:true});

export const Chat:Model<ChatDocument> = mongoose?.models?.Chat || mongoose.model('Chat', chatSchema);