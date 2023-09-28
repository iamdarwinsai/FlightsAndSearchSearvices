const express=require("express");

const {PORT}=require("./config/serverConfig")


const startUpServer=async ()=>{

    const app=express();

    app.listen(PORT,()=>{
        console.log(`Started running in ${PORT}`);
    })
}

startUpServer();