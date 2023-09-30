let imgArr = [
  {img:['','11','111']},
  {img:["","","111"]}
]
for (key in imgArr){
  let neiArr = imgArr[key].img
  for(let i = 0; i<neiArr.length;i++){
    if(neiArr[i] !== ""){
      [neiArr[0],neiArr[i]]=[neiArr[i],neiArr[0]]
    }
  }
}
console.log(imgArr);