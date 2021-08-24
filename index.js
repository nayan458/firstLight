const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
// const memb = require("./src/module/users");
// require("./src/db/conn");

app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

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

// app.get('/hurray',(req,res)=>{
//     res.render('hurray')
// })

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

// app.post('/reg',async(req,res)=>{
//     try {
//         const data = req.body;
//         console.log(data);
//         const mem1 = new memb({
//             email : req.body.emal,
//             passwor : req.body.pas
//         });
//         const result = await mem1.save()
//         res.render('hurray')        

//     } catch (err) {
//         console.log(`I am an error : ${err}`)
//     }
// })

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})


