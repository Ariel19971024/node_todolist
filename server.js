const http =require('http');
const { v4: uuidv4 } = require('uuid');
const errHandler = require('./errorHandle.js')
const todos=[];
const requestListener=(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    const header= {   
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
    }
    let body="";
    req.on('data', chrunk=>{
        body+=chrunk;
    })
    // req.on('end', ()=>{
    //     console.log(JSON.parse(body).title)
    // })
    if(req.url === '/todos' && req.method === 'GET'){
    res.writeHead(200, header);
    res.write(JSON.stringify({"status":"200","data":todos}));
    res.end();
    }else if(req.method === 'OPTIONS'){
        req.on('end', ()=>{
            try{
            const title = JSON.parse(body).title;
            if(title){
            const todo={
                "title": title,
                "id":uuidv4()
            }
            console.log(todo)
            todos.push(todo)
            res.writeHead(200, header);
            res.write(JSON.stringify({"status":"200","message":"新增成功","data":[]}));
            res.end();
            }else{
                res.writeHead(400, header);
                res.write(JSON.stringify({"status":"400","message":"新增失敗","data":[]}));
                res.end();
            }
         
            }catch(e){
                errHandler(res)
            }

        })
    }else if(req.url === '/todos' && req.method === 'POST'){
        req.on('end', ()=>{
            try{
            const title = JSON.parse(body).title;
            if(title){
            const todo={
                "title": title,
                "id":uuidv4()
            }
            console.log(todo)
            todos.push(todo)
            res.writeHead(200, header);
            res.write(JSON.stringify({"status":"200","message":"新增成功","data":[]}));
            res.end();
            }else{
                res.writeHead(400, header);
                res.write(JSON.stringify({"status":"400","message":"新增失敗","data":[]}));
                res.end();
            }
         
            }catch(e){
                errHandler(res)
            }

        })

        }else{
        res.writeHead(404, header);
        res.write(JSON.stringify({"status":"false","message":"無此網頁"}));
        res.end();
    }

}
const server =http.createServer(requestListener);
server.listen(process.env.PORT || 3005);