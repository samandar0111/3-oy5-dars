//  k sonni ohiriga R (1<= R <= 9) raqam qowadi
 function addleftdigid(k){
  k = k +''
 let R = ''

 i = Math.round(Math.random() * 10)
 if (i == 0){
   i = i + 1
  }
  else if(i == 10 ){
    i = i-1}else{
   
    }

 
    return k + i
   
}
 
console.log(addleftdigid(23)
);
