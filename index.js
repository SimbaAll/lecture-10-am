import express from "express";
import jwt from "jsonwebtoken";

const Secret_key = "MyJwtKey"
const app = express()

app.post("/login",(req,res)=>{
    const user = {
        id:1,
        name:"Savji",
        email:"savji123@gmail.com",
        password:"Savji123"
    }
    jwt.sign({ user }, Secret_key, { expiresIn: "300s"}, (error,token)=>{
        res.json({
            token
        })
    })
})

app.post("/profile", getToken, (req,res)=>{
    jwt.verify(req.token, Secret_key, (error,userData)=>{
        if (error) {
            res.json({
                result: "Invalid Token..."
            })
        } else {
            res.json({
                result:"Success",
                userData
            })
        }
    })
})

function getToken(req,res,next) {
    const headresData = req.headers['authorization']
    if (typeof headresData !== 'undefined') {
        const data = headresData.split(" ")
        const token = data[1]
        req.token = token
        next()
    } else {
        res.send({result:"Can't Get Token..."})
    }
}

app.listen(3000)
