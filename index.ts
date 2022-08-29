//#region Type Annotations

// let myName: string = 'Adam';
// let myAge: number = 32;

// console.log('myName:', myName);
// console.log('myAge:', myAge);
// console.log('typeof myName:', typeof myName);
// console.log('typeof myAge:', typeof myAge);

// myName = 42 // does not work => cannot turn string into number

//#region add without types
// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, "1")); // returns "51" due to type casting

//#endregion

//#region add with types

// function addWithTypes(a: number, b: number): number {
//   return a + b;
// }

// console.log(addWithTypes(5, '1')); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// console.log(addWithTypes(5, 1));

//#endregion

//#endregion

//#region Inferred Types

// const myNameInferred = 'Adam';
// const myAgeInferred = 32;
// const numbers = [1, 2, 3, 4];

// console.log('typeof myNameInferred', typeof myNameInferred);
// console.log('typeof myAgeInferred', typeof myAgeInferred);
// console.log('typeof numbers', typeof numbers);

// // return type is inferred
// function addWithTypes(a: number, b: number) {
//   return a + b;
// }

// console.log('addWithTypes', addWithTypes(1, 2));

//#endregion

//#region Union Types

// const numbersAndStrings: (string | number)[] = [1, 'Adam', 20, 'stuff'];
// let theAnswer: string | number = 42;
// theAnswer = '42';

// function getGreeting(name: string, age: number | string) {
//   return `My name is ${name} and I am ${age}`;
// }

// console.log('age string:', getGreeting('Adam', '32'));
// console.log('age number:', getGreeting('Adam', 32));

//#endregion

//#region Objects

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//   name: 'Adam',
//   age: 32,
// };

// function greet(person: Person) {
//   return `My name is ${person.name} and I am ${person.age}`;
// }

// console.log('greet with interface:', greet({ name: 'Adam', age: 32 }));

//#region destructuring

// interface Person {
//   name: string;
//   age: number;
// }

// function greetDestructured({ name, age }: Person) {
//   return `My name is ${name} and I am ${age}`;
// }

// console.log('greetDestructured:', greetDestructured({ name: 'Adam', age: 32 }));

//#endregion

//#region Optional Properties

// interface Person {
//   name: string;
//   age?: number;
// }

// function greetNullableAge({ name, age }: Person) {
//   let response = `My name is ${name}`;

//   if (!!age) {
//     response += ` and I am ${age}`;
//   }

//   return response;
// }

// console.log('no age:', greetNullableAge({ name: 'Adam' }));
// console.log('with age:', greetNullableAge({ name: 'Adam', age: 32 }));

//#endregion
//#endregion

//#region Types

// same as interface
// type Address = {
//   streetAddress1: string;
//   streetAddress2?: string;
//   city: string;
//   state: string;
//   zip: string;
// };

// // now you can use it in interface
// interface Person {
//   name: string;
//   age?: number;
//   address: Address;
// }

// // can also be used in type
// type PersonType = {
//   name: string;
//   age?: number;
//   address: Address;
// };

// type SimplePerson = { name: string; age?: number };

// /**
//  * name: string
//  * age: number
//  * streetAddress1: string;
//  * streetAddress2?: string;
//  * city: string;
//  * state: string;
//  * zip: string;
//  */
// type ComplexPerson = SimplePerson & Address;

// /**
//  * name: string
//  * age: number
//  * -- OR --
//  * streetAddress1: string;
//  * streetAddress2?: string;
//  * city: string;
//  * state: string;
//  * zip: string;
//  */
// type IncompletePerson = SimplePerson | Address;

// interface Greeting {
//   greet(person: Person): string;
// }

// type GreetingType = {
//   greet(person: Person): string;
// };

// type BootstrapButtonColor =
//   | 'primary'
//   | 'secondary'
//   | 'success'
//   | 'danger'
//   | 'warning'
//   | 'info'
//   | 'light'
//   | 'dark';

// function getButtonClass(color: BootstrapButtonColor) {
//   return `btn btn-${color}`;
// }

// // console.log('getButtonClass:', getButtonClass('white')); // Argument of type '"white"' is not assignable to parameter of type 'BootstrapButtonColor'.ts(2345)
// console.log('getButtonClass:', getButtonClass('success')); // result => `btn btn-success`

/**
 * SUMMARY:
 * If you are describing an object, use an interface.
 * If you're describing other things (like properties), use a type
 */

//#endregion

//#region Classes

// class Person {
//   name: string;
//   age?: number;

//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     let response = `My name is ${this.name}`;

//     if (!!this.age) {
//       response += ` and I am ${this.age}`;
//     }

//     return response;
//   }
// }

// const adam = new Person('Adam');
// console.log('without age:', adam.greet());

// const adamWithAge = new Person('Adam', 32);
// console.log('with age:', adamWithAge.greet());

//#region Easier properties

// class SimplerPerson {
//   constructor(private name: string, private age?: number) {}

//   greet() {
//     let response = `My name is ${this.name}`;

//     if (!!this.age) {
//       response += ` and I am ${this.age}`;
//     }

//     return response;
//   }
// }

// const adam2 = new SimplerPerson('Adam');
// console.log('without age:', adam2.greet());

// const adamWithAge2 = new SimplerPerson('Adam', 32);
// console.log('with age:', adamWithAge2.greet());

//#endregion

//#endregion

//#region any

// function greetAny(person: any) {
//   return `My name is ${person.name} and I am ${person.age}`;
// }

// console.log('greet any:', greetAny({ name: 'Adam', age: 32 }));

//#endregion

//#region unknown

// function greetUnknown(person: unknown) {
//   return `My name is ${person.name} and I am ${person.age}`; // cannot use properties
//   // return `My name is ${person}`;
// }

// console.log('greet unknown:', greetUnknown('Adam'));

//#endregion

//#region never

// interface Triangle {
//   kind: 'triangle';
//   sideLength: number;
// }

// interface Circle {
//   kind: 'circle';
//   radius: number;
// }

// interface Square {
//   kind: 'square';
//   sideLength: number;
// }

// type Shape = Triangle | Circle | Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2;
//     case 'square':
//       return shape.sideLength ** 2;
//     default:
//       // Type 'Triangle' is not assignable to type 'never'.ts(2322)
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }

//#endregion
