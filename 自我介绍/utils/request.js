import  baseUrl  from "../config/index.js"

export function request(params){
	return new Promise((resolve,reject)=>{
		uni.request({
			url: baseUrl + params.url,
			method: params.method,
			
			success:(res)=>{
				console.log("请求成功");
				resolve(res.data)
			},
			fail: (err) => {
				console.log("请求失败",err);
				reject(err)
			}
		})
	})
}
 // default request;