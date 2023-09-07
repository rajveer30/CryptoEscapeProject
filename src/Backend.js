const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //Cross-Origin Resource Sharing
const usermodel = require("./Models/UserModel");
const buyselltransactionmodel = require("./Models/BuySellTransactionModel");
const app = express(); //using express as app
app.use(cors());
app.use(express.json());



mongoose
  .connect("mongodb://127.0.0.1:27017/cryptodb", { useNewUrlParser: true , useUnifiedTopology:true })
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  });

  const { MongoClient, ObjectId } = require('mongodb');

const dbURI = 'mongodb://127.0.0.1:27017'
 const client = new MongoClient(dbURI, {
     useNewUrlParser: true
 });


 client.connect(err => {
     if(err) {
        console.error('Failed to connect',err);
        return;
  }
     client.close(); 
});

app.post("/signup", async (req, res) => { // async before a function makes the function return a promise
  try {
    await usermodel.create({ 
      email: req.body.email, //frontend se user se data pass hora h backend me 
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
});

app.post("/transaction", async (req, res) => {
 const {email,payment}=req.body;
  // try {
  //   await buyselltransactionmodel.create({
  //     email:email,
  //     payment:payment
  //   });
  //   res.json({ status: "ok" });
  // } catch (err) {
  //   res.json({ status: "error" });
  // }

  // Create a new User document
  const newTransaction = new buyselltransactionmodel({email, payment });

  // Save the document to MongoDB
  newTransaction
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ success: true, message: 'Data saved successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving data' });
    });
});

app.post("/login", async(req, res) => {
  const {email, password} = req.body;
  // const isMatch =false;
  try {
      const user = await usermodel.findOne({email});
      if(!user)
        {return res.status(400).json({message: "Invalid"})}
      // if(password !== user.password)
      // { return res.status(400).json({message: "Invalid"})}
      // else{
      //     res.status(200).json({message:"successssss"})
      // }
      if(user.password===password){
        // isMatch=true;
        res.status(200).json({message:"successssss"})

      }
      else {
        return res.status(401).json({message: 'Invalid'})

      }
  } catch(error) {
      res.status(500).json({message: error.message});
  }
})

const collection=client.db('cryptodb').collection('TransactionData')

const coinArray=[];
const cursor=collection.find({});
cursor.forEach(doc => {
  coinArray.push(doc);
  // console.log("afs",coinArray);
}, err =>{
  if(err){
  console.error('failed');
  return;
}
console.log("Finished..")
})
app.get('/my-object',(req,res)=>{
  let myObject=coinArray;
  console.log("tttttt",myObject);
  res.json(myObject);
  
});


app.listen(2000, () => {
  console.log("running ");
});


