import express from "express";
import { MongoClient } from "mongodb";
import Product from "../models/Product.js";

const router = express.Router();
const uri = "mongodb+srv://fred:1234@cluster0.mv07zh4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get("/products", async (req, res) => {
    try {
        client.connect()
        .then( async () => {
            const database = client.db();
            const collection = database.collection("products");
            const products = await collection.find().toArray();
            res.status(200).json(products);
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