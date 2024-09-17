const express =require("express")
const cors= require("cors")

const app = express()
app.use(cors())
let data = "Initial Data"

app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
app.get("/getData",(req,res)=>{
    console.log('data',data)
    res.send({data})
})

app.get("/updateData",(req,res)=>{
     data = "UpdatedData"
    res.send({data})
})

app.listen(4000,()=>console.log("server is running"))