import express from "express";
import cors from "cors";
import {Server} from "socket.io"
import http from "http"
import socketHandler from "./io";



const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = new Server(server,{cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }})

io.on("connection",socketHandler)

// app.use(router);

server.listen(PORT, () => console.log(`Server has started on ${PORT}`));