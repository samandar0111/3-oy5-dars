// k biror sonni kvadrati bosa true qaytadi aks holda false

IsSquare = function(k){
  let a = Math.round(k ** 0.5)
   
if(a == k ** 0.5)
return true

return false
}
console.log(IsSquare(9));