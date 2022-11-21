// N! ni hisoblaydi

FactN = function(N){
  let a = 1
if( N > 0){
  for(let i = 1; i <= N; i++){
    a *= i
  }
}else{
  return 'N > 0 shart bajarilishi kerak'
}
  return a
}
console.log(FactN(5));