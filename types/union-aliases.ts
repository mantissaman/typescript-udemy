type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; // literal type

function combine(
    n1: Combinable, 
    n2: Combinable, 
    resultType: ConversionDescriptor 
    ) {
  //console.log(typeof n1);
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || resultType === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
//   if(resultType === 'as-number'){
//     return +result
//   }
//   else{
//     return result.toString();
//   }
}

const result = combine(30, 26, "as-number");
console.log(result);

const resultx = combine("30", "2", "as-number");
console.log(resultx);

const resultStr = combine("Atul", "Priya", "as-text");
console.log(resultStr);
