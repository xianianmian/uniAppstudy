
<template>
	<view>
		<uni-forms ref="form" :modelValue="form" >
			<uni-forms-item label="用户名" name="username">
				<uni-easyinput type="text" v-model="form.username" placeholder="用户名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="text" v-model="form.password" placeholder="请输密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					username:"",
					password:""
				},
				userMessage:{}
			}
		},
		methods: {
			qudd(msg){
				console.log(msg);
				uni.switchTab({
					url:`/pages/user/user`,
					success:()=>{
						console.log('go to user');
					},
					fail(err) {
						console.log(err);
					}
				})
			},
			submit(){
				uni.request({
					url:'http://127.0.0.1:8081/hx/hxuser/login',
					method:"POST",
					data:this.form,
					success:(res)=>{
						console.log(res);
						uni.setStorageSync('token',res.data.data.token);
						uni.setStorageSync('userData',res.data.data.userData);
						this.qudd(res.data.data.userData)
					},
					fail: (err) => {
						console.log(err);
					}
				})

			}
		}
	}
</script>

<style>

</style>
