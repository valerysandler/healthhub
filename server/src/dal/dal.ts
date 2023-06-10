import { connect } from "mongoose";
// const uri = process.env.MONGO_URI!;
const uri = process.env.MONGO_URI!; // Get the MongoDB URI from the environment variables

async function connectToMongoDB(): Promise<void> {
    try {
        const db = await connect(uri); // Connect to MongoDB
        console.log('Connected to MongoDB', db.connections[0].name);     
    }
    catch (error: any) {
        console.error('Error connecting to MongoDB', error);
    }
}

export default {
    connectToMongoDB
};