import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import routes
import { authenticateToken } from './controllers/listings.js';
import userRoute from './routes/user.js';
import listingRoute from './routes/listing.js';
import cookieParser from 'cookie-parser';

// const CONNECTION_URL = "mongodb+srv://root:gqLWw1AzUDMjv2RU@cluster0.kh5y6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const PORT = 5000;

//to access env variables
dotenv.config();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true})); //instead of bodyParser use this
app.use(cors())
// route middlewares
app.use('/api/user',userRoute);
// app.use('/api',authenticateToken,listingRoute)
app.use('/api',listingRoute)

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));