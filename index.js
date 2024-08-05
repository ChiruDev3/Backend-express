import express from 'express'

const app = express()
const PORT = 3000

app.get('/health',(req,res)=>{
    res.send("jai shree ram")
    const username = req.body.username
    const password = req.body.password
    const kidneyId = req.query.kidneyId
    if(username === "chiru" && password === "123"){
        if(kidneyId==1||kidneyId==2){
            res.json({
                "msg" : "your kidney is alright"
            })
        }else{
            res.json({
                "msg": "your kidney is bad"
            })
        }
    }
});
app.listen(PORT)