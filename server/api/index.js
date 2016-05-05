import express from 'express';
var router = express.Router();

var persons = [
  {
    "id":1,
    "firstName":"Scott", 
    "lastName":"Williams",
    "stars": 4,
    "phone": "0797885940"
  },
  {
    "id":2,
    "firstName":"Charlie", 
    "lastName":"Ebers",
    "stars": 4,
    "phone": "07972323940"
  },
  {
    "id":3,
    "firstName":"Jack", 
    "lastName":"Thompsons",
    "stars": 4,
    "phone": "07972323940"
  }
]


router.get('/person/:id', (req, res, next) => {

  let person = persons.filter(personObj => {
    return personObj.id === parseInt(req.params.id); 
  });
  
  if(person.length >= 1) person = person[0]
  
  res.json(person);
});

router.get('/persons', (req, res, next) => {
  res.json(persons);
});


export default router;