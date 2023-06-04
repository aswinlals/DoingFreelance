const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})




app.post("/postjob",async(req,res)=>{
    const formData = req.body;

  const form = new Form(formData);

  form.save()
    .then(() => {
      res.status(200).json({ message: 'Form data saved successfully' });
    })
    .catch((error) => {
      console.error('Failed to save form data', error);
      res.status(500).json({ error: 'Failed to save form data' });
    });
});