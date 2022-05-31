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
    

    //answer 2 
   conn.sobject("Candidature__c").create(
    { First_Name__c :'BENNAI', Last_Name__c : 'Brahim', Year_Of_Experience__c  : '0' }, 
function(err, ret) {
    if (err || !ret.success) { return console.error(err, ret); }
    console.log("Created record id : " + ret.id);

})

})