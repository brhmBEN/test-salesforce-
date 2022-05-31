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
    

     //answer 1 
   conn.query("SELECT First_Name__c, Last_Name__c, Year__c , Year_Of_Experience__c FROM Candidature__c WHERE ID='a004L000002gCJK' ", (err, result)=>{
    if(err) {
           res.send(err) 
    }
       else {
           
           console.log("Total records : " + result.totalSize )
           res.json(result.records)
           
       }       
  })

})