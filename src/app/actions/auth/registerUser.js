'use server'
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"
import bcrypt from 'bcrypt'; 

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesObj.userCollection)
    
    // Validation
    const { name, email, password } = payload;
    if (!email || !password) return { success: false };

    const user = await userCollection.findOne({ email });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10); 
        payload.password = hashedPassword;

        const result = await userCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;

        return { acknowledged, insertedId };
    }
    
    return { success: false };
}
