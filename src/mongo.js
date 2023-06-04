const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/test")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    languagesKnown: {
        type: String,
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
      experienceLevel: {
        type: String,
        required: true,
      },
      portfolioLink: {
        type: String,
        required: true,
      },
})

const collection = mongoose.model("collection",userSchema)

module.exports=collection