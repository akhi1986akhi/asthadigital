const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://akhi1986akhi:5ZT2CNDB7K3mPjwY@cluster0.wucuh.mongodb.net/mydb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connection done");

});

const userSchema =  new mongoose.Schema({
    name:String,
    father:String,
    contact:String,
    email:String,
    address:String
});

// collection creation
const User = new mongoose.model('User',userSchema);

// creating documents
const createDocument = async () =>{
    try{
        const createUser = new User({
            name:"Shubham",
            father:"Mr. Singh",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const result = await createUser.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

createDocument();