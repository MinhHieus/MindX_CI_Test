// MaxMulti
let arr = [2, 3, -5, -2, 4];

function adjacentElementsProduct(array) {
    let max = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let a = array[i] * array[i + 1];
        if (a > max) {
        max = a;
        }
    }

   return max;
}

console.log(adjacentElementsProduct(arr));

//TeamWeight
const myArray = [60, 40, 55, 75, 64];
const firstArray = [];
const secondArray = [];

for (let i in myArray){
    if(i%2 == 0){
        firstArray.push(myArray[i]);
    } else {
        secondArray.push(myArray[i]);
    }
}

const alternativeSum = (a) => {
    let sum = 0;
    for(let i in a){
        sum += a[i];
    }
    return sum;
}

const firstSum = alternativeSum(firstArray);
const secondSum = alternativeSum(secondArray);

let finalSum = [firstSum, secondSum];
console.log(finalSum);