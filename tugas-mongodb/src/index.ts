import express from "express"
import bodyParser from "body-parser"
import mongoose, { MongooseError } from "mongoose"
import router from "./routes/api"

const PORT = 3000;
const DATABASE_URL = "cluster-wpu-course.n0qel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-wpu-course";
const DATABASE_USERNAME = "fauzirahmat89";
const DATABASE_PASSWORD = "9pw1bueZggjEuJso";

async function db() {
    try {
        const connectionUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
        await mongoose.connect(connectionUrl, {
            dbName: "Cluster-wpu-course"
        });
        console.log("succesful connect to database");
    } catch (error) {
        const err = error as MongooseError;
        throw new Error(err.message); 
    }
}

async function main() {
    const app = express();
    await db();
    app.use(bodyParser.json());

    app.use("/api", router);

    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    })
}

main();