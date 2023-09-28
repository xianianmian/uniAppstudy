<template>
	<view>

		<uni-forms ref="form" :modelValue="formData" >
			<uni-forms-item label="id" name="name">
				<uni-easyinput type="text" v-model="formData.id" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="时间" name="time">
				<uni-easyinput type="text" v-model="formData.time" placeholder="请输大概时间" />
			</uni-forms-item>
			<uni-forms-item label="幻想的内容">
				<uni-easyinput type="textarea" v-model="formData.text" placeholder="请输入自我介绍" />
			</uni-forms-item>

			<uni-section title="只选择图片" type="line">
				<view>
						<uni-file-picker
							v-model="imageValue" 
							fileMediatype="image" 
							mode="grid" 
							@select="select" 
						></uni-file-picker>
						</view>
					</uni-section>
			<uni-section title="本地数据" type="line">
				<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			</uni-section>
		</uni-forms>
		<button @click="submit">Submit</button>
	</view>
</template>

<script>
	import {putHxData ,zhuYeData} from "../../api/huanXiang.js"
	export default {
		name: "hxzujian",
		data() {
			return {
				value: 0,
				imageValue:[],
				range: [{
						value: 0,
						text: "爬山"
					},
					{
						value: 1,
						text: "变成狗"
					},
				],
				// 表单数据
				formData: {
					id: '',
					text: '',
					time:'',
					imgUrl:'',
					type:'爬山'
				},

			}
		},
		methods: {
			//下来选择时用
			change(e) {
				this.formData.type = this.range[e].text
			},
			// 选择以后
			select(e){
				console.log(e,e.tempFilePaths[0]);
				this.formData.imgUrl = e.tempFilePaths[0]
			},
			//表单提交
			submit(){
				//数据提交请求
				let tiJiaoData = JSON.stringify(this.formData)
				let obj = JSON.parse(tiJiaoData);
				obj.id = parseInt(obj.id);
				
				// console.log(obj);
				if(obj){
					putHxData(tiJiaoData).then(res=>{
						return zhuYeData(this.formData.type);
					}).then(res=>{
						this.$emit('updateHxlist', res);
					}).catch(err=>{
						console.log(err);
					})
				}
			}
		}
	}
</script>

<style lang="scss">

</style>