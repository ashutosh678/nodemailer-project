const nodemailer = require('nodemailer');

const msg = {
    from: "akkrantio@gmail.com",
    to:"21uec034@lnmiit.ac.in",
    subject:"Nodemailer Testing",
    text:"Aaa bhaii aa gaya swaad"
};
nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:"akkrantio@gmail.com",
        pass : "jcqyrtutklqhfkaq"
    },
    port:465,
    host:"smtp.gmail.com"
})
.sendMail(msg, (err) => {
    if(err){
        return console.log("error occurred",err);
    }
    else{
        return console.log("email sent");
    }
})