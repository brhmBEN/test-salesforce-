const express = require ('express') 
const res = require('express/lib/response')
var jsforce = require ('jsforce') 
require('dotenv').config()

const app = express() 
const PORT= 3001

const {SF_LOGIN_URL , SF_USERNAME, SF_PASSWORD} = process.env

const conn=new jsforce.Connection({
    loginUrl:SF_LOGIN_URL 
})





conn.login(SF_USERNAME, SF_PASSWORD, (err, userInfo)=>{
    if(err){
        console.error(err) 
    } else{
        console.log('User ID'+ userInfo.id)
        console.log('Org ID'+ userInfo.organizationId)
    }
} )



app.listen(PORT, ()=> {
   
    console.log("server is running at http://localhost:${PORT}")
})


app.get( '/', (req, res)=> {
    

    conn.sobject('Candidature__c')
    .find({ 'ID' : 'a004L000002gCJK' })
    .update({ Last_Name__c  : 'BENNAI'  }, function(err, rets) {
      if (err) { return console.error(err); }
      console.log(rets);
     
    });    

})