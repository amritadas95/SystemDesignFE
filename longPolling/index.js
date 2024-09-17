const express =require("express")
const cors= require("cors")

const app = express()
app.use(cors())


//app.use(express.json())
let data = "InitialData"
let waitingList =[]
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})
app.get("/getData",(req,res)=>{
  if(req.query.lastData !== data){
    res.json({data})
  }else{
    console.log('hello')
  waitingList.push(res)
  }
})

app.get("/updateData",(req,res)=>{
     data = req.query.data
     while(waitingList.length>0){
        const client=waitingList.pop()
        client.json({data})
     }
    res.send({success:"sucess"})
})

app.listen(4000,()=>console.log("server is running"))