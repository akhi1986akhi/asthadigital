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
        const createAman = new User({
            name:"Aman Kumar",
            father:"Mr. Ajab Singh",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const createRaj = new User({
            name:"Raj Kumar",
            father:"Mr. Mahendra",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const createKaushik = new User({
            name:"Kaushik",
            father:"Mr. Prateek",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const createAjeet = new User({
            name:"Ajeet Kumar",
            father:"Mr. Arjun",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const createMohan = new User({
            name:"Mohan",
            father:"Mr. Mahendra",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const createSurendra = new User({
            name:"Surendra",
            father:"Mr. Mahendra",
            contact:"987654321",
            email:"akhi1986@hotmail.com",
            address:"gurugram"
        })
        const result = await User.insertMany([createAman,createRaj,createKaushik,createAjeet,createMohan,createSurendra]);
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

createDocument();