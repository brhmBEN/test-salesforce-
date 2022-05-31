const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    const path=url.parse(req.url).pathname;
    switch(path){
        case '/' :
            afficherPage('./index.html',res)
            break
        case '/answer1' :
            afficherPage('./answer1.html',res)
            break
        case '/answer2' :
            afficherPage('./answer2.html',res)
            break
        case '/answer3' :
            afficherPage('./answer3.html',res)
            break
        case '/answer4' :
             afficherPage('./answer4.html',res)
            break
        case '/answer5' :
             afficherPage('./answer5.html',res)
            break
        default:
            res.end('Page non trouvée')
            break
    }
    
});
server.listen(3001,'127.0.0.1',()=>{
    console.log('Server running')
})
function afficherPage(path,res){
    fs.readFile(path,null,(error,data)=>{
        if(error){
            res.end('Page non trouvée')
        }else{
            res.end(data)
        }
    })

}