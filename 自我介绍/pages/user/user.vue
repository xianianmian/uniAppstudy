<template>
	<view>
		<view class="用户名">
			我是：{{userData.username}}
		</view>
		
		<button @click="cee">dssfsdf</button>
		<button @click="addfun">增加数据</button>
	</view>
</template>

<script>
	import {gaiHxData,putHxData} from '../../api/huanXiang.js'
	export default {
		data() {
			return {
				userData:{},
				params : {
					id:15,
					text:"yinhua151515",
					time:"shuiyue",
					imgUrl:'sdssd',
					type:"爬山",
					}
			}
			imgArr:['232','2323']
		},
		onLoad(option) {
			this.userData = uni.getStorageSync('userData')
		},
		methods: {
			init(msg){
				this.userData =msg
			},
			cee(){
				var data = {"text":"首都师范大学","time":"大二","imgUrl":'["blob:http://localhost:8080/11b06c5d-27a5-418f-a244-d477828ad710"]',"type":"爬山","id":18} 
				gaiHxData(data).then(res=>{
					console.log(res,'xiu');
				}).catch(err=>{
					console.log(err);
				})
			},
			addfun(){
				console.log('ss');
				this.params.imgUrl = JSON.stringify(String(this.imgArr))
				// {"text":"1313131","time":"bc","imgUrl":[],"type":"变成狗","id":"13"} ss
				putHxData(this.params).then(res=>{
					console.log(res);
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style>

</style>
