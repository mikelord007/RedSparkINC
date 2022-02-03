import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import socketHandler from "./io/index.js";
import http from "http"
import { Server } from 'socket.io';

import { authenticateToken } from './middleware/authenticateToken.js';
import userRoute from './routes/user.js';
import chatRoute from './routes/chat.js';
import listingRoute from './routes/listing.js';
import tradeRoute from './routes/trade.js';
import otpRoute from "./routes/otp.js";

const CONNECTION_URL = "mongodb+srv://root:gqLWw1AzUDMjv2RU@cluster0.kh5y6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const PORT = process.env.port || 5000

dotenv.config();

const app = express();

dotenv.config();
app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
  res.send("This is working!")
})

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true})); //instead of bodyParser use this
// route middlewares
app.use('/api/user',userRoute);
app.use('/api/otp',otpRoute)
app.use('/api',authenticateToken,listingRoute)
app.use('/api',authenticateToken,tradeRoute)
app.use('/api/chat',authenticateToken,chatRoute)

const server = http.createServer(app);
const io = new Server(server,{cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }})

socketHandler(io);



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));