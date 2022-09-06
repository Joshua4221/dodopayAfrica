const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data.room_name);
    console.log("just join");
    socket.to(data.room_name).emit("totaluser", data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room_name).emit("receive_message", data);
  });

  socket.on("create-room", (data) => {
    console.log(data);
    socket.emit("receive-room", data);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(PORT, () => console.log(`connected on port ${PORT}`));
