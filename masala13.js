RingS = function(R1,R2){
let s1 = 3.1415*R1**2
let s2 = 3.1415*R2**2
if(R1 < 0 || R2 < 0)
return'notogri amal'
  if(R1>R2)
  return s1 - s2

  if(R2 > R1)
  return s2 - s1
  if(R1 == R2)
  return 0

}
console.log(RingS(1,2));