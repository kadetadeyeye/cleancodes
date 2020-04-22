/*
//Javascript Best Practices

- A professional developer will write the code for the future self and for the "other guy" not just for the machine. 
- Any code you write is never written just once rather it will sit down and wait for the future guy and make him miserable. Hopefully, that future guy won't be you
- the clean code can be defined as the code written in such a manner that is self-explanatory, easy to understand by humans and easy to change or extend
- Even bad code can function. But if the code isn’t clean, it can bring a development organization to its knees

1.Strong type check
0 == false // true
0 === false // false
2 == "2" // true
2 === "2" // false

2. Variable
Name your variables in a way that they reveal the intention behind it

3. Functions
Use long and descriptive names. Considering that it represents a certain behavior, a function name should be a verb or a phrase fully exposing the intent behind it as well as the intent of the arguments. Their name should say what they do

*/

    const users = [{
     id: 1,
     name: "Carlos Caballero",
     memberSince: "1997–04–20",
     favoriteLanguageProgramming: ["JavaScript", "C", "JAVA"],
    },
    {
     id: 2,
     name: "Antonio Villena",
     memberSince: "2014–08–15",
     favoriteLanguageProgramming: ["Go", "Python", "JavaScript"
    ],
    },
    {
     id: 3,
     name: "Jesús Segado",
     memberSince: "2015–03–15",
     favoriteLanguageProgramming: ["PHP", "JAVA","JavaScript"
    ],
    }];

    /*
    Use intention revealing names
Variable names must reveal the intention of that variable. That is, we should not have variables with names like “x” or “y” unless we are developing mathematical software
*/
class Customer {
    private Date generationTimestamp;
    private Date modificationTimestamp;
   }

   /*
   Don’t add unneeded context
It is not necessary to add context of the class or package in the definition of the name of a variable.

It is very common that context is added in the name of the variable to know in which workspace this variable is located
   */
  const Car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
   };

   function paintCar(car) {
    car.carColor = 'Red';
   }



   const Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
   };

   function paint(car) {
    car.color = 'Red';
   }

   /*
Function arguments (2 or fewer ideally)
This concept is essential to improve the quality of your code.
You should reduce the number of function arguments. An adequate number could be 2 or less, but don't get obsessed with the numbers since these depend on the specific programming language we are using
   */

  function newBurger(name, price, ingredients, vegan) {
    // ...
}

function newBurger(burger) {
    // ...
} 

function newBurger({ name, price, ingredients, vegan }) {
    // ...
} 
const burger = {
    name: 'Chicken',
    price: 1.25,
    ingredients: ['chicken'],
    vegan: false,
};
newBurger(burger);

/*
advantages of using functional programming on the imperative.

Pure functions are easier to reason about
Testing is easier, and pure functions lend themselves well to techniques like property-based testing
Debugging is easier
Programs are more bulletproof
Programs are written at a higher level, and are therefore easier to comprehend
Function signatures are more meaningful
Parallel/concurrent programming is easier
*/
const items = [{
    name: 'Coffe',
    price: 500
  }, {
    name: 'Ham',
    price: 1500
  }, {
    name: 'Bread',
    price: 150
  }, {
    name: 'Donuts',
    price: 1000
  }
];
let total = 0;
for (let i = 0; i < items.length; i++) {
  total += items[i].price;
}
const total = items
  .map(({ price }) => price)
  .reduce((total, price) => total + price);