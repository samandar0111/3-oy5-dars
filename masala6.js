
// butun musbat sonni raqamlarini teskari qlp cqaradi
function InvertDigit(a){
let teskarisi = ''
a = a+''
for(let i= a.length-1 ; i >= 0; i--){
teskarisi += a[i]
}
return teskarisi
}
console.log(InvertDigit(122222));