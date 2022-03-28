const errorHandler=(res)=>{
    const header= {   
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
        }
    res.writeHead(400, header);
    res.write(JSON.stringify({"status":"400","message":"新增失敗","data":[]}));
    res.end();
}
module.exports=errorHandler;