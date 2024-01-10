const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

const con = mysql.createConnection({
  host: 'sql313.infinityfree.com',
  user: 'if0_35515359',
  password: 't5oDzVzpbMx4u',
   database: 'if0_35515359_mydb',
   port: 3306
})
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.get('/profile', (req, res)=>{
  fetch('https://www.gongozconcept.com/api/user/',{
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token fb4279c6a797e9fd0fd26acef0ea0bd2877bd4de'
    }
  })
  .then(res=>res.json())
  .then(data=>res.json(data))
  .catch(err=>console.log(err))
})

app.listen(3000, ()=>console.log('running on port 3000'))