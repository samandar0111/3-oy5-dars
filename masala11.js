// ax**2 + bx + c kvadrat funksiyani yecimlari sonini topadi
tenglama = function(a,b,c){
  let D = b**2 - 4*a*c
  if(D<0)return{javob:0}
  if(D==0)return{javob:1}
  if(D>0)return{javob:2}
}
console.log(tenglama(-1,5,2));