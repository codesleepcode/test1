const express = require("express");
const app = express();
const port = 3000;

app.get('/',  (req,res) => {
  res.send("<html><h1>welcome to my app</h1> <h2> version 1.0 </h2> </html>")
})

app.get('/products', (req,res) => {
  res.send("{product id:1 ,price: 100$},{product id:2, price: 200$}")
})

app.listen(port, ()=>{
  console.log(`app listening on port ${port}`)
}) 
