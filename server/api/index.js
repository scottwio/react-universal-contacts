import express from 'express';
import findIndex from 'lodash/findIndex';
var router = express.Router();

var persons = [
  {
    "id":1,
    "firstName":"Scott", 
    "lastName":"Williams",
    "stars": 4,
    "phone": "07978859400"
  },
  {
    "id":2,
    "firstName":"Jess", 
    "lastName":"Smith",
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

let currentId = 4;
let getPerson = (id) =>{
    let person = persons.filter(personObj => {
    return personObj.id === parseInt(id); 
  });
  
  if(person.length >= 1) person = person[0]
  return person;
}

router.get('/person/:id', (req, res, next) => {
  res.json(getPerson(req.params.id));
});

router.post('/person/', (req, res, next) =>{
  let person = Object.assign({}, req.body, {id:currentId++});
  persons.push(person);
  res.json(person);
});

router.get('/persons', (req, res, next) => {
  res.json(persons);
});

router.put('/person/:id', (req, res, next) => {
  let index = findIndex(persons, (person) => { 
    return person.id == req.params.id
  });
  persons.splice(index, 1, req.body);
  res.json(req.body);
});

router.delete('/person/:id', (req, res, next) => {
  let index = findIndex(persons, (person) => { 
    return person.id == req.params.id
  });
  persons.splice(index, 1);
  res.json(req.body);
});


export default router;