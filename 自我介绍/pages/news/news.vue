<template>
	<view>

	</view>
</template>

<script>
			import {huanXiangD} from '../../api/huanXiang.js'
	export default {
		data() {
				return {
						      shuju: "",
					info: [{
						content: '内容 A'
					}, {
						content: '内容 B'
					}, {
						content: '内容 C'
					}],
					current: 0,
					mode: 'nav',
					imgArr:[]
				}
			},
			onLoad(options) {
			  this.getShuju(options.id, options.type);
			},
			methods: {
				//得到详细的数据，因为狗的接口问题，暂时不会写 下面的作废
			  getShuju(id, type) {
			    huanXiangD(id,type).then(res=>{
						this.shuju = res[0]
					})
					console.log(this.shuju);
				}
			}
	}
</script>

<style>

</style>
