<script>
	export default {
		onLaunch: function() {
				console.log('App Launch');
				let token= uni.getStorageSync('token');    
				// if (token) {
				// 	//存在则关闭启动页进入首页
				// 	uni.reLaunch({
				// 		url: "/pages/user/user",
				// 		success: () => {
				// 		}
				// 	})
				// } else {
				// //不存在则跳转至登录页
				// 		uni.reLaunch({
				// 		url: "/pages/login/login",
				// 		success: () => {
				// 		}
				// 	})
				// }
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
