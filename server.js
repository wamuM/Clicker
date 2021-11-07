const express = require("express")
const app = express()
const PORT = 3000

app.use("/src/",express.static(__dirname+"/src/"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/index.html");
});
app.listen(PORT, ()=>{
    console.log("Server Listening at http://localhost:"+PORT)
});