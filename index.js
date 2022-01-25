const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res)=>{
  const fortunes = ['your future is as bright as the stars', 'i see a cookie in yur future',
'A beautiful, smart, and loving person will be coming into your life.','A dubious friend may be an enemy in camouflage.',
'A faithful friend is a strong defense.'];

let randomNum = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomNum];

res.status(200).send(randomFortune);
});
const goals = []

app.post('/api/goals', (req, res)=>{
  goals.push(req.body.name)
})
app.get('/api/goals', (req,res)=>{
  res.status(200).send(goals)
  // console.log(goals)
})
app.post('/api/remove-goals', (req, res)=>{
  // console.log(req.body)
  goals.splice(goals.indexOf(req.body.name),1)
})


app.listen(4000, () => console.log("Server running on 4000"));
