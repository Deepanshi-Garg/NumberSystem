const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let primeNumList = [];
// find prime num
for(let i=0; i<numbers.length; i++){
    if(checkPrime(numbers[i])){
        primeNumList.push(numbers[i]);
    }
}
console.log(primeNumList);

// check prime
function checkPrime(n){
    let isprime = true;
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }else{            
            continue;
        }
    }
    return isprime;
}

//find max and min
primeNumList.sort();
console.log(primeNumList);

//sum
let sum=0;
for(let i=0; i<primeNumList.length; i++){
    sum+=primeNumList[i];
}
console.log("sum = "+sum);