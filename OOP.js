// define a person with a normal function

function createNewPerson(name){
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hello I\'m' + obj.name + ' ');
    }
    return obj;
}

function Person(first,last,age,gender,interestss) {
    this.name = {
        first : first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.bio =function(){
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.')
    }
    this.greeting = function(){
        alert('Hi I\'m' + this.name.first + ' ')
    };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1);

//Javascript is not a class based language but a prototype based languge

let names = {
    fname : "Kristen",
    lname : "Teigen"
}
console.log(names.fname);

function DogObject(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function(){
        return 'I bark';
    }
    let john = new DogObject("John", 45)
}


function Employee (name, profession) {
    this.name = name;
    this.profession = profession;
    } // Employee () is the constructor function because we use the new keyword below to invoke it.
    
    var richard = new Employee ("Richard", "Developer") // richard is a new object we create from the Employee () constructor function.
    
    console.log(richard.name); //richard
    console.log(richard.profession); // Developer

//Implementation of Combination Constructor/Prototype Pattern
    function User (theName, theEmail) {
        this.name = theName;
        this.email = theEmail;
        this.quizScores = [];
        this.currentScore = 0;
    }
    
    User.prototype = {
        constructor: User,
        saveScore:function (theScoreToAdd)  {
            this.quizScores.push(theScoreToAdd)
        },
        showNameAndScores:function ()  {
            var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
            return this.name + " Scores: " + scores;
        },
        changeEmail:function (newEmail)  {
            this.email = newEmail;
            return "New Email Saved: " + this.email;
        }
    }

    //Make Instances of the User function
    // A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18
