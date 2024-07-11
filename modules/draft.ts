//Using class as a type
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet():string {
        console.log(`Hello, my name is ${this.name}`);
        return 'bye'
    }
}

// Using the Person class as a type
function greetPerson(person: Person) {
    
    person.greet();
}

const john = new Person("John", 30);
greetPerson(john);

const myArry = []
const voider = (callback:()=>void):void=>{
   console.log("there you go",callback);   
//    throw new Error("error")

return
}
// function voider(callback:()=>void){
//     console.log("there you go",callback);   
//     throw new Error("error")
// }
voider(()=>myArry.push(5))
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });
//   printName({...{ last: "Alisson",then:0 }});//error since first is mandatory and missing

  printName({...{first: "Alice", last: "Alisson",then:0 }});

  // Tupple vs array
const myTupple:readonly[string,boolean, ...number[]]=["hi",false,1,2,3,4,5,6,6,6,345]
const myArray: readonly (string|boolean|number)[]=["hi",1,2,3,4,5,6,6,false]
// myTupple.push(false)
// myArray.push(null)
console.log('my tuple',myTupple,myArray)

//assertion =>dictation
let n:string= String(67)
// let s:number = n as number//Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.
let s:number = n as unknown as number

//generics
type OneOrMany<Type> = Type | Type[];
let myOneOrMany:OneOrMany<number> = []  
myOneOrMany = 5

function useOneOrmany<T>(arg:OneOrMany<T>):OneOrMany<T>{
    console.log(arg);
    if(Array.isArray(arg)) return arg[0]
    return [arg]
}
useOneOrmany(["2","h","j"])
useOneOrmany([3,5,6])
useOneOrmany("Hellp")
useOneOrmany(1)
// interface
interface Dog {
    legs:number,
    color:string,
    owner:string,
    offsprings:number
}
interface Cat{
    legs:number,
    owner:string,
    sound:string,
    gender:string
}
interface Pet extends Dog,Cat{}// fails only when there is neither
interface Pet{
    name:string
}// fails only when there is neither
type Bi = Dog&Cat//works only if all properties of both types are present
const mypet:Pet ={
    legs:3,
    color:"black",
    owner:"me",
    offsprings:4,
    sound:"meow",
    gender:"male",
    name:''
} 
// const mypet1:Pet = {
//     legs:3,
//     color:"black",
//     gender:"male",
//     owner:"me",
//     sound:"meow",
//     name:''
// }

const mybi:Bi ={
    legs:3,
    owner:"me",
    color:"black",
    offsprings:4,
    sound:"meow",
    gender:"male"
} 

// type
// type Dog = {
//     legs:number,
//     color:string,
//     owner:string,
//     offsprings:number
// }
// type Cat={
//     legs:number,
//     owner:string,
//     sound:string,
//     gender:string
// }
// type Pet = Dog|Cat// fails only when there is neither
// type Bi = Dog&Cat//works only if all properties of both types are present
// const mypet:Pet ={
//     legs:3,
//     color:"black",
//     owner:"me",
//     offsprings:4,
//     sound:"meow",
//     gender:"male"
// } 
// // const mypet1:Pet = {
// //     legs:3,
// //     color:"black",
// //     owner:"me",
// //     sound:"meow"
// // }

// const mybi:Bi ={
//     legs:3,
//     owner:"me",
//     color:"black",
//     offsprings:4,
//     sound:"meow",
//     gender:"male"
// } 