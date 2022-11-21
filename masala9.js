// a,b,c sonlarni osish tartibida yozp beradi a < b < c
function sortlns( a,b,c){
  let d
  if(b < a && b < c && c < a){
    d = a
    a = b
    b = c
    c = d
  }else if(b < a && b < c && c > a){
    d = a
    a = b
    b = d
  }else if(c < a && c < b && b < a ){
    d = a
    a = c
    c = d
  }else if(c < a && c < b && b > a ){
    d = a
    a = c 
    c = b 
    b = d
  }else if(b > c ){
    d = c 
    c = b 
    b = d
  }else if(c > b){

  }
  return {
    a,b,c
  }
}
console.log(sortlns(55,43,64));