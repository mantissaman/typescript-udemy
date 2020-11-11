
//type Person = {
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: "Atul",
    age: 44,
    greet(p: string) {
        console.log(p + ' ' + this.name);
    }
};

user1.greet('Hi there I am ');


interface Named {
    readonly name?: string;
    outputName?: string; //optional
}

interface Greetable {
    greet(phrase: string): void;
}


class Person2 implements Greetable, Named {
    name?: string;
    age: number = 30;

    constructor(n: string = 'Jack'){
        if (n){
            this.name = n;
        }
    }
    greet(p: string) {
        console.log(p + ' ' + this.name);
    }
}

let user2: Greetable;

user2 = new Person2();
user2.greet('Hi I am --- ');


type AddFn = (a:number, b:number) => number;

let add: AddFn;

add = (n1:number, n2:number) => {
    return n1 +n2;
}

//Function Interface
interface AddFn2 {
    (a:number, b:number) : number;
}

let add2: AddFn2;

add2 = (n1:number, n2:number) => {
    return n1 +n2;
}
