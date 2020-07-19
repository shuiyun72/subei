<template>
	<view class="business">
		<view class="t_b_bg">
			<view class="t1">
				<view class="l">
					<image src="../../static/img/toux.png" class="t_img"></image>
					<view class="a">
						<view class="name">
							杨小小
						</view>
						<view class="sm_t1">
							<image src="../../static/img/hyvip.png" class="t1_img"></image>
							会员
						</view>
					</view>
				</view>
				<view class="r">
					推荐人 : 张茵茵
				</view>
			</view>
			<view class="t2">
				<view class="left">
					<view class="money">
						1860.0
					</view>
					<view class="">
						账户余额 ( 元 )
					</view>
				</view>
				<view class="">
					<button class="btn round blue_n ms" @click="getMoney">提现</button>
				</view>
				
			</view>
		</view>
		<view class="busi_p2">
			<view class="item" @click="nativeOrder('order')">
				<view class="n">
					5
				</view>
				<view class="">
					我的订单<text class="iconfont iconjiantou"></text>
				</view>
			</view>
			<view class="xie">
				
			</view>
			<view class="item"  @click="nativeOrder('earn')">
				<view class="n">
					180.0
				</view>
				<view class="">
					今日收益<text class="iconfont iconjiantou"></text>
				</view>
			</view>
		</view>
		<view class="busi_p3">
			<image src="../../static/img/sbkf.png" class="img" @click="busiP3('lxkf')"></image>
			<image src="../../static/img/xrbd.png" class="img" @click="busiP3('xrbd')"></image>
		</view>
		<view class="busi_p4">
			<view class="tt">
				必备工具
			</view>
			<view class="bibei_list">
				<view class="item" v-for="item in biList" @click="bibei(item.url)">
					<view class="iconfont" :class="item.icon"> </view>
					<view class="">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				biList:[
					{icon:"iconfenxiang",text:"邀请分享",url:"bi1"},
					{icon:"icontuandui",text:"我的团队",url:"bi2"},
					{icon:"iconmarketingturntablewinningDetail",text:"收益明细",url:"bi3"},
					{icon:"iconshoukuan-cuxiantiao",text:"收款码",url:"bi4"}
				]
			};
		},
		methods:{
			getMoney(){
				uni.navigateTo({
					url:"./getMoney"
				})
			},
			nativeOrder(el){
				if(el == 'order'){
					uni.navigateTo({
						url:'./myOrder'
					})
				}else
				if(el == "earn"){
					uni.navigateTo({
						url:'./getEarnings'
					})
				}
				
			},
			busiP3(el){
				if(el == 'lxkf'){
					uni.navigateTo({
						url:'../home/callKf'
					})
				}else
				if(el == 'xrbd'){
					uni.navigateTo({
						url:'../school/myStudy?pageType=xrbd'
					})
				}
			},
			bibei(url){
				if(url == 'bi1'){
					uni.navigateTo({
						url:'./haibao'
					})
				}else
				if(url == 'bi2'){
					uni.navigateTo({
						url:'./myGroup'
					})
				}else
				if(url == 'bi3'){
					uni.navigateTo({
						url:'./haveDetail'
					})
				}else
				if(url == 'bi4'){
					uni.navigateTo({
						url:'./vipGetMoney'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.business {
		.t_b_bg {
			background: url(../../static/img/bg.png) no-repeat center center;
			background-size: 700upx 300upx;
			height: 300upx;
			box-sizing: border-box;
			padding: 30upx 50upx 20upx;
			color: #fff;
			.t1{
				display: flex;
				justify-content: space-between;
				
				.l{
					display: inline-flex;
					.t_img{
						width: 120upx;
						height: 120upx;
					}
					.a{
						margin-left: 20upx;
						.name{
							padding: 10upx 0 10upx 16upx;
							font-size: 36upx;
						}
						.sm_t1{
							background-color: #fff;
							color: #FFA200;
							padding: 4upx 20upx;
							border-radius: 20upx;
							transform: scale(.9);
							width: 110upx;
							
							.t1_img{
								margin-right: 6upx;
								width: 40upx;
								height: 30upx;
							}
						}
					}
				}
				
			}
			.t2{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 0 0upx 150upx;
				.money{
					font-size: 50upx;
					font-weight: bold;
				}
			}
			
		}
		.busi_p2{
			padding: 20upx 26upx;
			display: flex;
			justify-content: space-around;
			.item{
				text-align: center;
				color: #666;
				font-size: 32upx;
				.iconfont{
					font-size: 28upx;
					margin-left: 10upx;
				}
				.n{
					font-size: 36upx;
					margin-bottom: 10upx;
				}
			}
			.xie{
				width: 1upx;
				height: 50upx;
				background-color: #999;
				position: relative;
				top: 30upx;
			}
		}
		.busi_p3{
			padding: 26upx;
			background-color: #f0f0f0;
			display: flex;
			justify-content: space-between;
			.img{
				width: 340upx;
				height: 160upx;
				display: block;
			}
		}
		.busi_p4{
			padding: 20upx 26upx;
			color: #666;
			.tt{
				font-size: 36upx;
				padding-bottom: 50upx;
			}
			.bibei_list{
				display: flex;
				justify-content: space-around;
				.item{
					text-align: center;
					.iconfont{
						font-size: 50upx;
					}
				}
			}
		}
	}
</style>
