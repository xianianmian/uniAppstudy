import {request} from '../utils/request.js'
 //得到幻想种类的数据
 export function zhuYeHx(){
	 return request({
		 url:'/hxtype/get',
		 method:"GET"
	 })
 }


//根据type请求数据
 export function zhuYeData(type){
	 return request({
		 url:`/hxdata/get?type=${type}`,
		 method: "GET",
	 })
 }

 //增加id和type得到具体的数据
 export function huanXiangD(id,type){
 	 return request({
 		 url:`/hxdata/getdetail?id=${id}&type=${type}`,
 		 method: "GET",
 	 })
 }
 //插入一天数据
 export function putHxData(data){
	 return request({
		 url:'/hxdata/post',
		 method:"POST",
		 data:data
	 })
 }
 //修改某天的数据
 export function gaiHxData(data){
	 return request({
	 		 url:`/hxdata/update`,
	 		 method:"PUT",
	 		 data:data
	 })
 }
 
 //删除某天的数据
 export function deleteHxData(id){
	 return request({
	 		 url:`/hxdata/delete?id=${id}`,
	 		 method:"DELETE",
	 })
 }
 