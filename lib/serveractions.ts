'use server'
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

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