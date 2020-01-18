function sum(n1: number, n2: number, showResult:boolean, phrase:string){
    console.log(typeof n1); 
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }
    else{
        return result;
    }
}

let a: number;
a = 5;
const b = 2.8;
const printResult = true;
const resultLabel ="Result is: "

sum(a, b, printResult, resultLabel);
