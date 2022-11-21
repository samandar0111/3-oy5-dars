//  tub sonlarni topadi toq songa true aks holda false
 
 isprime = function(a){
  for(let i = a - 1; i > 1; i--){
    if(a % i == 0){
      return false
    }
  }
 return true
 


}
console.log(isprime(5));