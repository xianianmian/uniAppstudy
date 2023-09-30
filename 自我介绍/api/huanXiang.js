import {request} from '../utils/request.js'

//根据type请求数据
 export function zhuYeData(type){
	 return request({
		 url:`/api1/data?type=${type}`,
		 method: "GET",
	 })
 }
 //得到幻想种类的数据
 export function zhuYeHx(){
	 return request({
		 url:'/api2/HXtype',
		 method:"GET"
	 })
 }
 //增加id和type得到具体的数据
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
 //修改某天的数据
 export function gaiHxData(id,data){
	 return request({
	 		 url:`/api1/data/${id}`,
	 		 method:"PUT",
	 		 data:data
	 })
 }
 
 //删除某天的数据
 export function deleteHxData(id){
	 return request({
	 		 url:`/api1/data/${id}`,
	 		 method:"DELETE",
	 })
 }
 