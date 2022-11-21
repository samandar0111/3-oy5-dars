// teng tomonli uchburchakning perimetri va yuzini topish
let perimetr
let yuzi
function triangle(a){
  perimetr = a * 3
  yuzi = ((3**0.5) / 4) * a**2
  return{
    perimetr,
    yuzi
  }
}
// console.log(triangle(3));