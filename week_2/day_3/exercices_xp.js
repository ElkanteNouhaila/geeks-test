// ==== Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// the output will be: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// ==== Exercise 2
function displayStudentInfo(objUser){
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

// ==== Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);
console.log(usersArray.map(user => [user[0], user[1] * 2]))

// ==== Exercise 4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//output: object

// ==== Exercise 5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  // 1 
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };

  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

    // 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };

    // 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };

  //option 2 will successfully extend the Dog class

// ==== Exercise 6
// [2] === [2]  false
// {} === {}    false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// Animal class
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  // Mammal class extends Animal
  class Mammal extends Animal {
    sound(animalSound) {
      return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  
  // Create a farmerCow instance
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  
  console.log(farmerCow.sound("Moooo")); 
  // Output: "Moooo I'm a cow, named Lily and I'm brown and white"
  
