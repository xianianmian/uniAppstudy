<template>
	<view>
		<header>
			<h2>我的主页</h2>
		</header>
		<!-- 幻想导航栏 -->
		<view class="huanxiang">
		  <view class="huanxiang-item " 
			v-for="(item) in huanxiang" :key="item.id" 
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
					<p>大概时间：{{item.time}} </p>
					<p><button @click.stop="changeHxDatalist">修改</button></p>
					<p><button @click.stop="deleteHxDatalist(item.id)">删除</button></p>
				</view>
				<span>{{item.text}}</span>
			</view>
			<view class="img">
				 <img :src="item.imgUrl[0]" alt="空"> 
			</view>
		</view>
		<!-- 添加幻想 -->
			<view>
				<button @click="showDrawer" type="primary">添加内容</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" :width="350">
					<button @click="closeDrawer" type="primary">关闭Drawer</button>
					<hxzujian @updateHxlist="updateHxDataList"  :openType="openType"></hxzujian>
				</uni-drawer>
			</view>
</view>
</template>

<script>
	import {zhuYeData ,zhuYeHx ,deleteHxData} from '../../api/huanXiang.js'
	import {chuLiImg ,chuliLunBo} from '../../utils/somgFunction.js'
	export default {
		data() {
			return {
				huanxiang: [],
				HxDataList: [],
				imgUrl:[],
				hxType:'爬山',
				navindex:1,
        openType:''
			}
		},
		onLoad() {
			this.getHxDataList(this.hxType)
			this.getHXtype()
		},
		methods: {
			//获取幻想的种类
			getHXtype(){
				zhuYeHx().then(res=>{
					this.huanxiang = res.data
					// console.log(this.huanxiang);
				})
			},
			// 得到幻想的信息
			getHxDataList() {
			  zhuYeData(this.hxType).then(res=>{
					this.HxDataList = res;
					this.imgUrl = chuliLunBo(this.HxDataList)
					this.HxDataList = chuLiImg(this.HxDataList)
          console.log(this.HxDataList);
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
				this.HxDataList = chuLiImg(this.HxDataList)
			},
      //修改幻想信息
      changeHxDatalist(){
        this.$refs.showRight.open();
        this.openType = "PUT"
      },
      //删除幻想信息
      deleteHxDatalist(id){ 
        deleteHxData(id).then(res=>{
          uni.showToast({
            title: '删除成功',
            icon: 'success'
          })
          uni.reLaunch({
            url: '/pages/zhuye/zhuye'
          })
        })
      },
			//两开关
			showDrawer() {
				this.$refs.showRight.open();
        this.openType = "POST"
			},
			closeDrawer() {
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
	$kai : rgba(177, 201, 65, 1);
	$bai :rgba(249, 248, 246, 1);
	header {
		background: rgba(177, 201, 65, 0.8);
		height: 80rpx;
		width: 100%;

		h2 {
			text-align: center;
			color: $bai;
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
			border: 1rpx solid $kai;
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
			h3{	color:$kai	}
			.text{color:$kai}
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

		.lue {
			.time{
				display: flex;
				p{
					width: 50%;
					button{
						background-color: $kai;
						color:$bai;
					}
				}
			}
			span {
				-webkit-line-clamp: 5;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			}
		}
	}
</style>