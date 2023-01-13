const persons = [
  {
    name: "John Doe",
    age: 180,
  },
  {
    name: "Peter Tricks",
    age: 111,
  },
  {
    name: "Bob Tracer",
    age: 114,
  },
];

console.log(persons);

let results = persons.some((person) => {
  console.log("Person: ", person);
  return person.age >= 18;
});

console.log(`There are older people: ${results}`);

results = persons.every((person) => {
  console.log("person: ", person);
  return person.age > 100;
});
console.log(results);
