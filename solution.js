//#1

const greetMessage = (user) => {
  console.log(`Good Morning ${user}`);
};

console.log(greetMessage("Ezekiel"));

//Higher order function
const greetUsers = (arr, fn) => {
  for (const person of arr) {
    fn(person);
  }
};

console.log(greetUsers(["John", "Peter", "Mark"], greetMessage));
