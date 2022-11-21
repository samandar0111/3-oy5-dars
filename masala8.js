// (a,b)ni qiymatini (s,f) bilan almawtiradi
function Swap(a,b,s,f){
let d = a 
a = s
s = d
d = b 
b = f 
f = d
return {
  a ,b,s,f
 }

}
console.log(Swap(1,2,3,4));