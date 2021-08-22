const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");

app = express()

const PathOfPublic = path.join(__dirname,"./public")
console.log(PathOfPublic);

const partialPath = path.join(__dirname,"./partial")
console.log(partialPath);

app.use(express.static(PathOfPublic))

app.set("view engine","hbs");
hbs.registerPartials(partialPath);

app.get("",(req,res)=>{
    res.render('index');
})
// app.get("/index",(req,res)=>{
//     res.render('index');
// })

// app.get("/about",(req,res)=>{
//     res.render('about');
// })

// app.get("/cart",(req,res)=>{
//     res.render('cart');
// })
app.get("/login",(req,res)=>{
    res.render('login');
})

app.get('*',(req,res)=>{
    res.render("404",{
        errorPage : "this page doesnot exist"
    });
})

app.get('/about/*',(req,res)=>{
    res.render("404",{
        errorPage : "this page under about doesnot exist"
    });
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})
