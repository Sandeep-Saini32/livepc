const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

app.use(cors())
app.use(express.json())

app.listen(9000, () => {
    console.log("server running")

})

mongoose.connect("mongodb+srv://sandeepsaini6712_db_user:xlY2B7R9QEk70wOP@bookstore.5p6gufq.mongodb.net/try")

    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((err) => {
        console.log("MongoDb error:",err)
    })



const signupSchema = mongoose.Schema({
    email: String,
    pass: String,Number,
   name:String,
   
})




const signupModel = mongoose.model("signup", signupSchema)

app.post("/api/signup", async (req, res) => {

    const show = await signupModel({
        email: req.body.email,
        pass: req.body.pass,
         name:req.body.name,
    
       
    })

    const sh = await show.save()

    if (sh) {
        res.send({ statuscode: 1 })
    }

    else {
        res.send({ statuscode: 0 })
    }

})

// FOR LOGIN

app.post("/api/loginpage", async (req, res) => {

    const save = await signupModel.findOne({ email:req.body.loginemail })

    // const logpass=req.body.loginpass

       if (!save) {
        return res.send({
            statuscode: 0
        });
    }


    if (save.pass===req.body.loginpass) {
        
        res.send({ statuscode: 1,
             id:save._id,
              email:save.email,
              name:save.name})
    }

    else {
      
        res.send({ statuscode: 0 })
    }
})
