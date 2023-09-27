import {request} from '../utils/request.js'

 export function zhuYeData(type){
	 return request({
		 url:`/api1/data?type=${type}`,
		 method: "GET",
		 
	 })
 }