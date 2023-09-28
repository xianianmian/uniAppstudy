import {request} from '../utils/request.js'

//根据type请求数据
 export function zhuYeData(type){
	 return request({
		 url:`/api1/data?type=${type}`,
		 method: "GET",
	 })
 }
 //的好幻想种类的数据
 export function zhuYeHx(){
	 return request({
		 url:'/api2/HXtype',
		 method:"GET"
	 })
 }
 //更加id和type得到具体的数据
 export function huanXiangD(id,type){
 	 return request({
 		 url:`/api1/data?id=${id}&type=${type}`,
 		 method: "GET",
 	 })
 }
 //插入一天数据
 export function putHxData(data){
	 return request({
		 url:'/api1/data',
		 method:"POST",
		 data:data
	 })
 }
 