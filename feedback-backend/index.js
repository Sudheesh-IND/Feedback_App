
//configuring dotenv
require('dotenv').config()
//importing express
const express=require('express')

//importing cors
const cors=require('cors')
const router = require('./routes/router')

//importing connection
require('./connection')

//making the serverr
const server=express()
server.use(cors())
server.use(express.json())
server.use(router)

server.listen(5000,()=>{
    console.log('server started')
})