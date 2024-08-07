import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export const CreateUserAccount = async(user: INewUser)=>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
            // user.username,
        )
        return newAccount
    } catch (error) {
        console.log(error)
        return error
    }
}