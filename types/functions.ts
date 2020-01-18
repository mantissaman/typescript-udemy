function add(n1: number, n2: number):number{
    return n1 + n2;
}

function printresult(num: number):void {
    console.log('result :'+ num);
}



let combineValues: (a:number, b:number) => number;
combineValues = add;

printresult(combineValues(2,5));

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})