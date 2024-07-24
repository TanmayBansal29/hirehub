import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from "./config/db.js";

// dotenv config
dotenv.config();

// Creating instance of express
const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))

// Connecting Database
connectDB();

// Listening to the server
app.listen(process.env.PORT, () => {
    console.log(`Server Running at PORT: ${process.env.PORT}`)
})
