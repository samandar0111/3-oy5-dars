// kordinata tekisligidagi nuqta coragini aniqlaydi

Quarter = function(x,y){
if(x > 0 && y > 0)
return '1-chorak'
if(x > 0 && y < 0)
return '2-chorak'
if(x<0 && y < 0)
return '3-chorak'
if(x<0 && y > 0)
return '4-chorak'
if(x == 0 || y == 0)
return 'kordinata oqida'
}
console.log(Quarter(0,4));