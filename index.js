//Constructor Functions
// function Person(fullName, money, sleepMood, healthRate) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMood = sleepMood;
//     this.healthRate = healthRate;
// }

// Person.prototype.sleep = function (hours) {
//     if (hours === 7) {
//         this.sleepMood = 'happy';
//     } else if (hours < 7) {
//         this.sleepMood = 'tired';
//     } else {
//         this.sleepMood = 'lazy';
//     }
// };

// Person.prototype.eat = function (meals) {
//     if (meals === 3) {
//         this.healthRate = 100;
//     } else if (meals === 2) {
//         this.healthRate = 75;
//     } else if (meals === 1) {
//         this.healthRate = 50;
//     }
// };

// Person.prototype.buy = function (items) {
//     this.money -= items * 10;
// };

// // Example usage:
// const person1 = new Person("John Doe", 100, 'happy', 80);
// person1.sleep(8);
// person1.eat(2);
// person1.buy(2);
// console.log(person1);

//Classes
// class Person {
//     constructor(fullName, money, sleepMood, healthRate) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;
//     }

//     sleep(hours) {
//         if (hours === 7) {
//             this.sleepMood = 'happy';
//         } else if (hours < 7) {
//             this.sleepMood = 'tired';
//         } else {
//             this.sleepMood = 'lazy';
//         }
//     }

//     eat(meals) {
//         if (meals === 3) {
//             this.healthRate = 100;
//         } else if (meals === 2) {
//             this.healthRate = 75;
//         } else if (meals === 1) {
//             this.healthRate = 50;
//         }
//     }

//     buy(items) {
//         this.money -= items * 10;
//     }
// }

// // Example usage:
// const person2 = new Person("Jane Doe", 150, 'tired', 90);
// person2.sleep(6);
// person2.eat(3);
// person2.buy(1);
// console.log(person2);

// //Objects Linking to Other Objects (OLOO)
// const PersonMethods = {
//     sleep(hours) {
//         if (hours === 7) {
//             this.sleepMood = 'happy';
//         } else if (hours < 7) {
//             this.sleepMood = 'tired';
//         } else {
//             this.sleepMood = 'lazy';
//         }
//     },

//     eat(meals) {
//         if (meals === 3) {
//             this.healthRate = 100;
//         } else if (meals === 2) {
//             this.healthRate = 75;
//         } else if (meals === 1) {
//             this.healthRate = 50;
//         }
//     },

//     buy(items) {
//         this.money -= items * 10;
//     }
// };

// function createPerson(fullName, money, sleepMood, healthRate) {
//     const person = Object.create(PersonMethods);
//     person.fullName = fullName;
//     person.money = money;
//     person.sleepMood = sleepMood;
//     person.healthRate = healthRate;
//     return person;
// }

// // Example usage:
// const person3 = createPerson("Jim Doe", 120, 'lazy', 85);
// person3.sleep(7);
// person3.eat(1);
// person3.buy(3);
// console.log(person3);

// //Factory Functions
// function createPersonFactory(fullName, money, sleepMood, healthRate) {
//     return {
//         fullName,
//         money,
//         sleepMood,
//         healthRate,

//         sleep(hours) {
//             if (hours === 7) {
//                 this.sleepMood = 'happy';
//             } else if (hours < 7) {
//                 this.sleepMood = 'tired';
//             } else {
//                 this.sleepMood = 'lazy';
//             }
//         },

//         eat(meals) {
//             if (meals === 3) {
//                 this.healthRate = 100;
//             } else if (meals === 2) {
//                 this.healthRate = 75;
//             } else if (meals === 1) {
//                 this.healthRate = 50;
//             }
//         },

//         buy(items) {
//             this.money -= items * 10;
//         }
//     };
// }

// // Example usage:
// const person4 = createPersonFactory("Jack Doe", 90, 'happy', 95);
// person4.sleep(6);
// person4.eat(2);
// person4.buy(2);
// console.log(person4);
