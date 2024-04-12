const http = require('http');
const socketIO = require('socket.io');
const express=require('express');
const app = express();
const server = http.createServer(app);
const PORT=8001;
const io = socketIO(server,{
    cors:{
        origin:'*',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    },
    // pingTimeOut:30000,
    // maxHttpBufferSize:4e9
});
io.on("connection",(socket)=>{
    
    console.log('connection established');
    socket.on("disconnect",()=>{
    console.log("disconnected");
    });
    socket.emit('verify',{'new_img_url':'https://images.unsplash.com/photo-1712876718842-5b7d59ad453b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','gt_img_url':'https://images.unsplash.com/photo-1712876718842-5b7d59ad453b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})
    socket.on('final_status',(data)=>{
        console.log(data);
    })

});
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} on gcs`)});