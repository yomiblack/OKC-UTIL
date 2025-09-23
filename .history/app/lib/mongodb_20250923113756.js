import { MongoClient } from "mongodb";

const clientOptions = {
    connectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 10000,
    maxPoolSize: 10

}