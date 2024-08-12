import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";
type user = {
  accountId: string;
  name: string;
  email: string;
  username?: string;
  imageUrl: URL;
};

export const CreateUserAccount = async (user: INewUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
      // user.username,
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await addUserToDb({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addUserToDb = async (user: user) => {
  try {
    const newUser = databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
