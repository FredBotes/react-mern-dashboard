import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient } from "mongodb"; 
import { ServerApiVersion } from "mongodb";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import {kpis} from "./data/data.js";
import { products } from "./data/data.js";
import { transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
const uri = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect the client to the server (optional starting in v4.7)
client.connect()
  .then(async () => {
    // Listen on port
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    const database = client.db(); 

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // const result = await database.dropDatabase();
    // console.log(`Dropped database: ${result}`);
    //  // Create a collection for KPIs (if not already created)
    //  const kpiCollection = database.collection("kpis");
    //  // Insert the data into the collection
    // const insertResult = await kpiCollection.insertMany(kpis);
    // console.log(`Inserted ${insertResult.insertedCount} document.`);

    // // Create a collection for products (if not already created)
    // const kpiCollection = database.collection("products");
    // // Insert the data into the collection
    // const insertResult = await kpiCollection.insertMany(products);
    // console.log(`Inserted ${insertResult.insertedCount} document.`);

    // // Create a collection for products (if not already created)
    // const transactionCollection = database.collection("transactions");
    // // Insert the data into the collection
    // const insertResult = await transactionCollection.insertMany(transactions);
    // console.log(`Inserted ${insertResult.insertedCount} document.`);

    
  })
  .catch((error) => console.error(`MongoDB Connection Error: ${error}`))
  .finally(() => {
    // Ensures that the client will close when you finish/error
    return client.close();
  });


// /* MONGOOSE SETUP */
// const PORT = process.env.PORT || 9000;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME ONLY OR AS NEEDED */
//     // await mongoose.connection.db.dropDatabase();
//     // KPI.insertMany(kpis);
//     // Product.insertMany(products);
//     // Transaction.insertMany(transactions);
//   })
//   .catch((error) => console.log(`${error} did not connect`));

