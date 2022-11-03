const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send({
            id:1,
            name:null,
        });
    // res.send({
    //     id:1,
    //     name:null,
    // });
    // res.json(null);
    // res.json(undefined);
});

app.get("/about",(req,res)=>{
    res.send("<h1>welcome to my about page</h1>");  //express automatically sets content-type of this document to text/html.
});

app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to my contact page");
});

// app.get("/temp",(req,res)=>{  //serving JSON file .express automatically converts this javascript object to 
//                                 //JSON object and also set its conent-type : application/json.
//     res.send([
//         {
//         id:1,
//         name:"vinod",
//         },
//         {
//         id:1,
//         name:"vinod",
//         },
//         {
//         id:1,
//         name:"vinod",
//         },
//     ]);
//     // res.send("welcome to my temp page");
// });


//or we can send json file like this------

app.get("/temp",(req,res)=>{
    res.json([
        {
            id:1,
            name:"neha",
        },
        {
            id:1,
            name:"neha",
        },
        {
            id:1,
            name:"neha",
        },
    ]);
});

app.listen(8000,()=>{
    console.log("listening to port 8000");
});
