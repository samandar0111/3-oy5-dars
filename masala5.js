// natural sonni raqamlari soni va yigindisini hisoblaydi
function DigitCountSum(a){
  a  =a + ''
  let soni
  let yigindisi = 0
  for(i=0;i < a.length; i++){
    yigindisi += a[i]*1
    soni = i+1
    
  }
  return{
    soni,yigindisi
  }
  
}
console.log(DigitCountSum(1111));