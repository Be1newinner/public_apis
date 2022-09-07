import {createServer} from 'http'

let port = process.env.PORT ;

if (port == null || port == "" ){
    port == 8080;
}

// let port = 8080;

createServer((req,res)=>{
    res.end("something is started");
}).listen(8080, ()=>console.log(`App Started on port ${port}`));

