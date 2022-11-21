// togri tortburchakni qarama qarwi burchaklari kardinatasidan perimetri va yuzini hisoblaydi
function RestPs(x1,y1,x2,y2){
  let x = Math.abs(x1 - x2) 
  let y = Math.abs(y1 - y2) 
  
  let perimetr =( x+y) * 2
  let yuzi = x * y 



  return {
    perimetr,yuzi
  }

}
console.log(RestPs(-4,2,4,-2));