// Type inference

const nome2:String = "tipo string"
const numero2:Number = 10

console.log(`string: ${nome2} number: ${numero2}`);

// Union types

let nomeIdade:String|Number = "joão"

console.log(nomeIdade);
nomeIdade = 23
console.log(nomeIdade);