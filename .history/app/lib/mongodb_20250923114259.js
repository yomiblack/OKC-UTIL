import { MongoClient } from "mongodb";

const clientOptions = {
    connectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 10000,
    maxPoolSize: 10,
    minPoolSize: 1

}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {client: cachedClient, db: cachedDb}
    }

    try{
        const client = await MongoClient.connect(process.env.MONGODB_URI, clientOptions);
        const db = client.db();

        cachedClient = client;
        cachedDb = db;

        return {client, db};
    }
    catch (errror) {
        
    }
}