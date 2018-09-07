//~~~~~~~~~~~~~Dependency~~~~~~~~~~~~~~~//
const   express         = require("express"),
        app             = express(),
        mongoose        = require("mongoose"),
        bodyParser      = require("body-parser"),
        cookieParser    = require("cookie-parser");
    
//~~~~~~~~~~~Initialisation~~~~~~~~~~~~//


//~~~~~~~~~~~Listener~~~~~~~~~~~~//

app.listen(process.env.PORT, process.env.IP, (err) =>{
    if(err)
        console.log("Oops! An error occured while launching the server");
    else
        console.log("[-Server launched successfully-]")
});