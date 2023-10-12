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
<!-- 			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							<img :src="item.content" alt="">
							<view class="" v-if="item.content != null">
								{{item.content}}
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot> -->
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
	      shuju: "",
				imgIndex:0,
				info: [],
				current: 0,
				mode: 'nav',
	    }
	  },
	  onLoad(options) {
	    this.getShuju(options.id, options.type);
	  },
	  methods: {
			//得到详细的数据，因为狗的接口问题，暂时不会写 下面的作废
	    getShuju(id, type) {
				console.log(id,type);
	      huanXiangD(id,type).then(res=>{
					console.log(res);
					this.shuju = res[0]
					// res[0].imgUrl.forEach((item)=>{
					// 	this.info.push({content:item})
					// })
					console.log(this.info)
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
