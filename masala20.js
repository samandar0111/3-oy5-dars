// K sonining N-raqamini qaytaradi agar N > K -1 qaytaradi

DigitN = function(K,N){
  K = K +''

  if(K[N - 1] == undefined){
    return '-1'
  }
  return K[N - 1]

}

console.log(DigitN(123354,5));