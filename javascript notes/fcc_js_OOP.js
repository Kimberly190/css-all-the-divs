// exercises and examples from
//TODO

// one-off named object, member method, and dot notation for property access
let dog = {
    name: "Fido",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + this.numLegs + " legs."; }
  };
  console.log(dog.name);
  console.log(dog.numLegs);
  console.log(dog.sayLegs());

  // constructor, ES5-style
  // "Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors."
  function Dog(name, color) {
//let Dog = function(name, color) { //<<<in js this is the same as above
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("Bruce", "red");

  // instanceof allows you to compare an object to a constructor, returning true or false based on
  // whether or not that object was created with the constructor
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(3);
  console.log(myHouse instanceof House); //true
  let yourHouse = { //impersonator
    numBedrooms: 2
  };
  console.log(yourHouse instanceof House); //false

  // prototype properties can reduce duplication
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");
  console.log(beagle);
  // all instances inherit the prototype, which inherits Object.prototype
  console.log(Dog.prototype.isPrototypeOf(beagle)); //true
  console.log(Object.prototype.isPrototypeOf(Dog.prototype)); //true
  
  // own properties - these are all non-prototype props, not just contructor props
  function Bird(name) {
    this.name = name;
  }
  Bird.prototype.numLegs = 2;
  let canary = new Bird("Tweety");
  canary.sound = "tweet";
  let ownProps = [];
  let prototypeProps = [];
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  console.log(ownProps); //name, sound
  console.log(prototypeProps); //numLegs

// constructor property of object
/* "Since the constructor property can be overwritten (which will be
    covered in the next two challenges) it’s generally better to use
    the instanceof method to check the type of an object." */
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
//alt
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
      return false;
    }
  }
  
  // set prototype to an object that already contains all static / shared needs
  Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  /* "There is one crucial side effect of manually setting the prototype to a new object.
  It erases the constructor property!"*/
  duck.constructor === Bird; // false -- Oops
  duck.constructor === Object; // true, all objects inherit from Object.prototype
  duck instanceof Bird; // true, still works
  //so do this:
  Bird.prototype = {
    constructor: Bird,
    numLegs: 2, 
    eat: function() {
    //etc
    }
  };

  // inheritance example
  function Animal() { }
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  //let animal = new Animal();
  // ^"There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge.
  // Instead, here's an alternative approach without those disadvantages:"
  let animal = Object.create(Animal.prototype);
  animal.eat(); // prints "nom nom nom"
  animal instanceof Animal; // => true
  // Set the Child's Prototype to an Instance of the Parent (not to the prototype itself!)
  function Dog() { }
  Dog.prototype = Object.create(Animal.prototype);
  function Bird() { }
  Bird.prototype = Object.create(Animal.prototype);
  //let beagle = new Dog(); beagle.constructor; // would be Animal(), so...
  // Reset an Inherited Constructor Property
  Dog.prototype.constructor = Dog;
  Bird.prototype.constructor = Bird;
  // Extend with methods
  Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };
  Dog.prototype.bark = function() {
    console.log("Woof!");
  }
  // Override parent method
  // Bird.eat() overrides Animal.eat()
  Bird.prototype.eat = function() {
    console.log("peck peck peck");
  };
  // Further inherit and override
  function Penguin() { }
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.constructor = Penguin;
  Penguin.prototype.fly = function() { console.log("Alas, this is a flightless bird."); }

  let duck = new Bird();
  let beagle = new Dog();
  let penguin = new Penguin();
  duck.eat();
  duck.fly();
  beagle.eat();
  beagle.bark();
  penguin.fly();

  // Use a Mixin to Add Common Behavior Between Unrelated Objects
  let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  let plane = {
    model: "777",
    numPassengers: 524
  };
  flyMixin(bird);
  flyMixin(plane);
  bird.fly(); // prints "Flying, wooosh!"
  plane.fly(); // prints "Flying, wooosh!"

  // Use Closure to Protect Properties Within an Object from Being Modified Externally
  // "In JavaScript, a function always has access to the context in which it was created. This is called closure."
  function Girl() {
    //this.weight = 15; //public
    let weight = 15; //private
    this.getWeight = function() {
      return weight;
    }
  }

  // Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("Do this right now!");
  })(); // this is an anonymous function expression that executes right away
  // Outputs "Do this right now!" immediately
  // Note that the function has no name and is not stored in a variable. The two parentheses ()
  // at the end of the function expression cause it to be immediately executed or invoked.

  // Use an IIFE to Create a Module
  // "The advantage of the IIFE is that any vars declared inside it are inaccessible to the outside world.
  // So how does that help us? The key is that an IIFE can have a return value just like any other function."
  // "As you can see, we were able to use the IFFE's return value to make batman's utility functions publicly
  // accessible. And at the same time we were able to ensure that batman's identity remains a secret from
  // any clowns who want to mess with it."
  //http://adripofjavascript.com/blog/drips/understanding-the-module-pattern-in-javascript.html
  //"IIFE for modules is an outdated practice. It was popular before the development of module systems like CommonJS, ES6 modules etc."
  let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();
  motionModule.glideMixin(duck);
  duck.glide();