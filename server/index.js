import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.js';
import listingRoute from './routes/listing.js';
import chatRoute from './routes/chat.js';
import cookieParser from 'cookie-parser';
import socketHandler from "./io/index.js";
import http from "http"
import { Server } from 'socket.io';

const CONNECTION_URL = "mongodb+srv://root:gqLWw1AzUDMjv2RU@cluster0.kh5y6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const PORT = process.env.PORT || 5000

const app = express();

dotenv.config();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true})); //instead of bodyParser use this
app.use(cors())
// route middlewares
app.use('/api/user',userRoute);
// app.use('/api',authenticateToken,listingRoute)
// app.use('/api/chat',listingRoute)
app.use('/api/chat',chatRoute)

const server = http.createServer(app);
const io = new Server(server,{cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }})

socketHandler(io);


// app.use(router);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));