const express=require('express');
const Joi=require('joi');

app=express();

app.use(express.json());

const pays =[
    {id : 1, name : 'Tunisia',states:['Tunis','Sfax','Sousse','Kairouan','Bizerte','Gabès','Ariana','Gafsa','Monastir','Ben Arous','Kasserine','Médenine','Nabeul','Béja','Le Kef','Mahdia','Sidi Bouzid','Jendouba','Tozeur','Manouba','Siliana','Zaghouan','Kébili']},
    {id : 2, name : 'USA',states:['New York','Los Angeles','Chicago','Houston','Washington','San Francisco','Philadelphie','Dallas','Détroit','Miami','Phoenix','Boston','Atlanta']},
    {id : 3, name : 'France',states:['Paris','Marseille','Lyon','Toulouse','Nice','Nantes','Montpellier','Strasbourg','Bordeaux','Lille','Rennes','Dijon']}
]

app.get("/pays",(req,res)=>{
    res.send(pays);
});

app.get("/pays/:id",(req,res)=>{
    const country=pays.find(c=>c.id==req.params.id);
    if(!country) return res.status(404).send('country is not found');
    res.status(200).send(country);
});
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening on ${port}...`);