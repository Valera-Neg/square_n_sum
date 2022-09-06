function squareSum(n){
 return n.map(e => Math.pow(e,2)).reduce((a,b) => a+b, 0)

}

console.log(squareSum([1,2])) //> 5
console.log(squareSum([0, 3, 4, 5])) //> 50
console.log(squareSum([])) //> 0
console.log(squareSum([1, 2, 2])) //> 9