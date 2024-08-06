import express from 'express'

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("jai shree ram")
})

let duda = []
let dudaId = 1

app.post('/duda',(req,res)=>{
    const name = req.params.body
    const newDuda = {id:dudaId++,name}
    duda.push(newDuda)
    res.status(201).send(newDuda)
})

app.listen(PORT)