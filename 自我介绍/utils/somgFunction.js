//处理空图
export function chuLiImg(imgArr){
	imgArr.forEach(x =>{
    let tempstr = JSON.parse(x.imgUrl == "" ? [] : x.imgUrl).replace(/"/g,"")
    console.log(tempstr);
    const resultArray = tempstr.split(/blob:/g);
    resultArray.shift();
    let arr = resultArray.map(item=>'blob:'+item)
    console.log(arr);
    x.imgUrl = arr
	});
	return imgArr
}


export function chuliLunBo(obj){
	let imgUrl = []
	obj.forEach(x=>{
    console.log(x,x.imgUrl);
    let tempstr = JSON.parse(x.imgUrl == "" ? [] : x.imgUrl).replace(/"/g,"")
    console.log(tempstr);
    const resultArray = tempstr.split(/blob:/g);
    resultArray.shift();
    let arr = resultArray.map(item=>'blob:'+item)
    console.log(arr);
    imgUrl.push(arr)
	})
	return imgUrl.flat(Infinity).filter(item => item != "")
}