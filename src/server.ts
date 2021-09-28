import { getApp } from './app';

const PORT = 3000;


const app = getApp();
const server = app.listen(PORT,()=>{
    console.log(`LOG(INFO) - App listen port ${PORT}`)
});
/* 
    Close the Server
*/
process.on('SIGINT',()=>{
    server.close();
    console.log("LOG(INFO) - App shutdown");
})
