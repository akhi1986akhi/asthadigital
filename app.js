const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jobs = require('./models/latestjob')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const portname = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://akhi1986akhi:5ZT2CNDB7K3mPjwY@cluster0.wucuh.mongodb.net/mydb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("database connected");
});
// app.use access public folder assets
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/index');
})
app.get('/latestJob', function (req, res) {
    jobs.find({}).sort({$natural:-1}).then((data) => {
        res.render('pages/latestJob', { records: data });
    })
})
app.get('/latestJobForm', function (req, res) {
    res.render('pages/latestjobForm');
})
app.use(express.urlencoded({ extended: false }))
app.post('/latestJobForm', jsonParser, function (req, res) {
    console.log(req.body.title);
    const createNewForm = new jobs({
        date: req.body.date,
        post: req.body.post,
        postname: req.body.postname,
        title: req.body.title,
        fdate: req.body.fdate,
        tdate: req.body.tdate,
        gfee: req.body.gfee,
        ofee: req.body.ofee,
        scfee: req.body.scfee,
        stfee: req.body.stfee,
        pfee: req.body.pfee,
        efee: req.body.efee
    })
    createNewForm.save().then(async (result) => {
        console.log(result);
        res.redirect('/latestJob');
    })

})
app.get('/pricing', (req, res) => {
    res.render('pages/pricing');
});
app.get('/services', (req, res) => {
    res.render('pages/services');
})
app.get('/services/eforms', (req, res) => {
    res.render('pages/services/eforms');
})
app.get('/services/itr', (req, res) => {
    res.render('pages/services/itr');
})
app.get('/services/withdrawl', (req, res) => {
    res.render('pages/services/withdrawl');
})

app.get('/contact', (req, res) => {
    res.render('pages/contact');
})


app.post('/contact', jsonParser, (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const message = req.body.message;

    var transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 80,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'info@asthadigital.co.in',
            pass:process.env.PASS
        }
    });
    var mailOptions = {
        from: 'info@asthadigital.co.in',
        to: 'akhi1986@hotmail.com',
        subject: ' CUSTOMER INQERY | '+ name,
        text: `
        
        Name: ${name}
        E-mail: ${email}
        Contact: ${contact}
        
        Message: 
        ${message}
        `
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mail Sent successusfully", info.response);
            res.render('pages/contactThankyou');
        }
    })
    // res.send("Mail Sent successfully");

})

app.listen(portname, () => {
    console.log(`Application started successfully on port ${portname}`);
});