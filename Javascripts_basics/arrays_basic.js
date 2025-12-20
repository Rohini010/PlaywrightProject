let a;
a=new Array(10,20,30,40,50,60)
let b=[1,2,3,4,5,6] // intializing

console.log(a)
console.log(a.length)
console.log("adding element at end")
a.push(70)
console.log(a)
console.log("adding element at start")
a.unshift(6)
console.log(a)
console.log("removing element at end")
a.pop()
console.log(a)
console.log("to check element present in array")
console.log(a.includes(70))
console.log("val of index in array")
console.log(a.indexOf(40))
console.log("creating sub array")
sub_arr=a.slice(2,6)
console.log(sub_arr)
let sum=0
for(let i=0;i<sub_arr.length;i++){
    sum+=sub_arr[i]
}
console.log(sum)

console.log("filter   map  reduce")

let result_sum=b.reduce((acr,curr) => acr+curr,0)
console.log(result_sum)
