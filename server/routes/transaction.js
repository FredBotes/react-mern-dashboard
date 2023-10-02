import express from "express";
import { MongoClient } from "mongodb";
import Transaction from "../models/Transaction.js";

const router = express.Router();
const uri = "mongodb+srv://fred:1234@cluster0.mv07zh4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get("/transactions", async (req, res) => {
    try {
        client.connect()
        .then( async () => {
            const database = client.db();
            const collection = database.collection("transactions");
            const transactions = await collection.find().limit(50).sort({createdOn: -1}).toArray();
            res.status(200).json(transactions);
        })
        .catch((error) => console.error(`MongoDB Connection Error: ${error}`))
        .finally(() => {
            // Ensures that the client will close when you finish/error
            return client.close();
          });        
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})


export default router;