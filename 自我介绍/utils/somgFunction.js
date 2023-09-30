//处理空图
export function chuLiImg(imgArr){
	imgArr.forEach(item =>{
		let neiArr = item.imgUrl
		for(let i = 0; i<neiArr.length;i++){
			if(neiArr[i] !== ""){
				[neiArr[0],neiArr[i]]=[neiArr[i],neiArr[0]];
				break;
			}
		}
	});
	return imgArr
}


export function chuliLunBo(obj){
	let imgUrl = []
	obj.forEach(x=>{imgUrl.push(x.imgUrl)})
	return imgUrl.flat(Infinity).filter(item => item != "")
}