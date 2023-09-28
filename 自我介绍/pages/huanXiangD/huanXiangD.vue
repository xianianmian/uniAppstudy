<template>
	<view>
		<view class="HxText">
			<header>
			{{shuju.type}}
			</header>
			<view class="time">
				{{shuju.time}}
			</view>
			<view class="img">
				<img :src="shuju.imgUrl" alt="">
			</view>
			<view class="text">
				{{shuju.text}}
			</view>
		</view>
	</view>
</template>

<script>
		import {huanXiangD} from '../../api/huanXiang.js'
	export default {
	  data() {
	    return {
	      shuju: ""
	    };
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
			}
		}
	};

</script>

<style lang="scss">
.HxText{
	margin: 0 4rpx;
	header {
		font-size: 50rpx;
		text-align: start;
	}
	.time{
		font-size: 50rpx;
	}
	.img{
		height: 350rpx;
		width: 100%;
		img{
			height: 100%;width: 100%;
		}
	}
	.text{
		text-indent: 10%;
		font-size: 40rpx;
	}
}
</style>
