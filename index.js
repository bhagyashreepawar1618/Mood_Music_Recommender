import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()
const app=express()

//for cross origin resource sharing 
app.use(cors());

const port = process.env.PORT

//serve files from static folder to browser
app.use(express.static('static'));

//home route
app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, '/static/index.html'));
})

//just testing route
app.get("/instagram",(req,res)=>
{
    res.send("hii bhagyashree pawar")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
