import mongoose, { Model } from "mongoose";

export interface User{
    username: string,
    fullname: string,
    email: string,
    profilePhoto: string,   
}

export interface UserDocument extends User, mongoose.Document{
    createdAt: Date,
    updatedAt: Date
}

const userSchema= new mongoose.Schema<UserDocument>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: {
        type: String,
        default:""
    },
},{timestamps:true});

const User:Model<UserDocument> = mongoose?.models?.User || mongoose.model('User', userSchema);

export default User;