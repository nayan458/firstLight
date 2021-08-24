const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FL-user",{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify : false
})
.then(()=>console.log("successfully connected to database"))
.catch((err)=>console.log(`Fail to connect to database`));
