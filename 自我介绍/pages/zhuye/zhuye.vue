<template>
	<view>
		<header>
			<h2>我的主页</h2>
		</header>
		<!-- 幻想导航栏 -->
		<view class="huanxiang">
		  <view class="huanxiang-item " 
			v-for="(item,index) in huanxiang" :key="item.id" 
			@click="getType(item.id)"
			:class="navindex==item.id?'active':''"
			>
		    <h3>幻想{{item.id}}</h3>
		    <view class="text">详情：{{item.text}}</view>
		  </view>
		</view>
		<!-- 幻想轮播图 -->
		<view class="lunbo">
			<view>
				<view class="uni-margin-wrap">
					<swiper class="swiper" circular 	indicator-dots="true" 	autoplay="true" 	interval="4000" 	duration="true">
						<swiper-item v-for="(item,index) in imgUrl" :key="index">
							<view class="swiper-item " >
								<img :src="item" alt="">
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
<!-- 幻想信息 -->
		<view class="HxList" v-for="item in HxDataList" :key="item.id"
		@click="intoDetail(item.id,item.type)">
			<view class="lue">
				<view class="time">
					<p>大概时间：{{item.time}}</p>
				</view>
				<span>{{item.text}}</span>
			</view>
			<view class="img">
				<img :src="item.imgUrl" alt="">
			</view>
		</view>
		<!-- 添加幻想 -->
			<view>
				<button @click="showDrawer" type="primary">添加内容</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" :width="350">
					<button @click="closeDrawer" type="primary">关闭Drawer</button>
					<hxzujian @updateHxlist="updateHxDataList"></hxzujian>
					<!-- <hxzujian ></hxzujian> -->
				</uni-drawer>
			</view>
</view>
</template>

<script>
	import {zhuYeData ,zhuYeHx} from '../../api/huanXiang.js'
	export default {
		data() {
			return {
				huanxiang: [],
				HxDataList: [],
				imgUrl:[],
				hxType:'爬山',
				navindex:1,
				tempId:0
			}
		},
		onLoad() {
			this.getHxDataList(this.hxType)
			this.getHXtype()
		},
		methods: {
			getHXtype(){
				zhuYeHx().then(res=>{
					this.huanxiang = res
				})
			},
			// 得到幻想的信息
			getHxDataList(type) {
			  zhuYeData(this.hxType).then(res=>{
					
					this.HxDataList = res;
					this.HxDataList.forEach(x=>{this.imgUrl.push(x.imgUrl)})//轮播图数据
					
				})
			},
			//切换导航栏
			getType( id) {
			  let index=this.huanxiang.findIndex(item=>{
					return item.id == id
				})
				this.navindex = index+1;
				this.imgUrl = []
				this.hxType = this.huanxiang[index].type
				this.getHxDataList(this.hxType)
			},
			//查看幻想详细信息 
			intoDetail(id,type){
				uni.navigateTo({
					url:`/pages/huanXiangD/huanXiangD?id=${id}&type=${type}`,
					success:()=>{
						console.log(id,type);
					}
				})
			},
			//刷新幻想信息列表
			updateHxDataList(newData){
				this.HxDataList = newData
				this.imgUrl = []
				this.HxDataList.forEach(x=>{this.imgUrl.push(x.imgUrl)})//轮播图数据
			},
			//两开关
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				//刷
				console.log(this.hxType);
				this.$refs.showRight.close();
				uni.reLaunch({
					url: `/pages/zhuye/zhuye`,
					success:res=>{
						
						
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	header {
		background: rgba(177, 201, 65, 0.8);
		height: 80rpx;
		width: 100%;

		h2 {
			text-align: center;
			color: rgba(249, 248, 246, 1);
		}
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;

		img {
			height: 100%;
			width: 100%;
		}
	}

	.huanxiang {
		width: 80%;
		margin: 0 auto;
		text-align: center;
		display: flex;

		.huanxiang-item {
			border: 1rpx solid rgba(177, 201, 65, 1);
			border-radius: 5rpx;
			margin: 10rpx;
			width: 50%;
			h3 {
				height: 40rpx;
				color: gray;
			}
			.text {
				height: 50px;
				font-size: 14px;
				margin-top: 5px;
				color:gray;
				font-size: 40rpx;
			}
		}
		.huanxiang-item.active{
			h3{	color:rgba(177, 201, 65, 1);	}
			.text{color:rgba(177, 201, 65, 1);}
		}
	}

	.HxList {
		display: grid;
		margin: 40rpx 5rpx;
		grid-template-columns: auto 200rpx;

		.img {
			img {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.lue span {
			-webkit-line-clamp: 5;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>