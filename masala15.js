// a dan b gaca bolgan sonlar yigindisini xisoblaydi
SumRange = function(a,b){
if(a>b)
return 0
let sum = 0 
for(let i = a + 1; i < b; i++){
  sum += i
}
return sum
}
console.log(SumRange(1,7));