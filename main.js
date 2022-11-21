
//  ko'pburchaklarni ichki burchaklari yig'indisi


function sumPolygon(n) {

	if(n > 2){
  
 return (n - 2)*180
  }
  return "noto'g'ri amal"
}

// ===========================

// switch,case da calculator

let son1 = 0
// prompt('1-sonni kiriting') * 1

let amal = ''
// prompt('amal kiriting') 

let son2 = 0
// prompt("2-sonni kiriting") * 1


switch(amal)
{
  case "+":
  console.log(son1 + son2 );
 break;
 case "-":
  console.log(son1 - son2 );
 break;
 case "*":
  console.log(son1 * son2 );
 break;
 case "/":
  console.log(son1 / son2);
 break;
}

// 3- a sonni 3-darajasini hisoblovchi funksiya

  function x(a){
  return a = a*a**2
 }

//  console.log(x(3));


// ==================================================


// a,b,c sonlarni yoki sonni 2,3,4-darajalarini cqaradi

function powerA123(a,b,c){
console.log(a**2);
console.log(a**3);
console.log(a**4);
if(b != undefined){
console.log(b**2);
console.log(b**3);
console.log(b**4);
}
if(c != undefined){
  console.log(c**2);
  console.log(c**3);
  console.log(c**4);
  c
}
}
// =============================
// 2ta sonning orta arifmetigi va geometrigini hisoblaydi
let arifmetigi 
let geometrigi
function MEAN(a,b){
  arifmetigi = (a + b)/2
  geometrigi = (a*b) ** 0.5
  return{
    arifmetigi,
    geometrigi
}
}
// console.log(MEAN(2,8));

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
let h 
function w(a){

for(let i = 0; i < 10; i++){
  h = i

}
return h
}
console.log(w(2));