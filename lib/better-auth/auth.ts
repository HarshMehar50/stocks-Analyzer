import { betterAuth } from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import {nextCookies} from "better-auth/next-js";
import mongoose from "mongoose";

let authInstance : ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
    if(authInstance)
        return authInstance;

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if(!db)
        throw new Error("MongoDB connection not found");

    authInstance = betterAuth({
        database : mongodbAdapter(db as any),
        secret : process.env.BETTER_AUTTH_SECRET,
        baseURL : process.env.BASE_URL,
        emailAndPassword : {
            enabled : true,
            disableSignUp : false,
            minPasswordLength : 8,
            maxPasswordLength : 128,
            autoSignIn : true,
        },
        plugins : [nextCookies()],

    });

    return authInstance;
}
export const auth = await getAuth();