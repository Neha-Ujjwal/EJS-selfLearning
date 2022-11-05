 const express=require('express');
 const app=express();
 const path=require('path');
 const hbs=require('hbs');
 const port=8000;

 //path to static files
const staticPath=path.join(__dirname,'../public');

//pah of template folder
const templatePath=path.join(__dirname+'/template/views');
const partialPath=path.join(__dirname+'/template/partials');


//to set the view engine
app.set('views')
app.set('view engine','hbs');

//we can the name of this view folder by.suppose the new name is template.
app.set('views',templatePath);

hbs.registerPartials(partialPath); //to use partials



//to use static files.It will automatically render index.html file
//  app.use(express.static(staticPath));

//template engine route  
app.get("/",(req,res)=>{
    res.render('index',{
        firstName:'thapa'
    });
})

//out of two app.get function first one will be rendered as compilaion will be from top to bottom
 
app.get("/",(req,res)=>{
    res.send('hello from the express server');
 })

 app.listen(port,()=>{
    console.log("listening to port 8000");
 })
