<template>
	<view class="goods_detail">
		<image src="../../static/img/jrsx2.png" class="goods_detail_img" mode="widthFix"></image>
		<view class="info">
			<view class="t1">
				<view class="left">
					<view class="red">
						秒杀价: ￥160.00
					</view>
					<view class="olm">
						￥568.00
					</view>
				</view>
				<view class="blue">
					剩余3件
				</view>
			</view>
			<view class="t2">
				香港塑贝 · 璀璨奢华焕颜套,重现20岁的自然美
			</view>
		</view>
		<view class="p_img_body">
			<view class="img"><image src="../../static/img/spxq1.png" mode="widthFix"></image></view>
			<view class="img"><image src="../../static/img/spxq2.png" mode="widthFix"></image></view>
			<view class="img"><image src="../../static/img/spxq3.png" mode="widthFix"></image></view>
			<view class="img"><image src="../../static/img/spxq4.png" mode="widthFix"></image></view>
			<view class="img"><image src="../../static/img/spxq5.png" mode="widthFix"></image></view>
			<view class="img"><image src="../../static/img/spxq6.png" mode="widthFix"></image></view>
		</view>
		<view class="btm_share_bar">
			<view class="left" v-if="showShareIcon">
				<view class="l1">
					<view class="iconfont iconxin"></view>
					<view class="">
						收藏
					</view>
				</view>
				<view class="l1" @click="openPopup" v-if="showShareIcon">
					<view class="iconfont iconfenxiang"></view>
					<view class="">
						分享
					</view>
				</view>
			</view>	
			<view class="r_btn">
				<button class="btn blue round ms" @click="orderTrue" v-if="showShareIcon">立即购买</button>
				<button class="btn blue round ms" @click="orderTrue('evm')" v-if="!showShareIcon">立即购买</button>
			</view>
		</view>
		<uni-popup type="bottom" ref="showshare">
			<view class="share_to_popup_body">
				<view class="title">
					分享到
				</view>
				<view class="imgs">
					<view class="item" @click="shareTo('wx')">
						<image src="../../static/img/weix.png" class="img"></image>
					</view>
					<view class="item" @click="shareTo('pyq')">
						<image src="../../static/img/pengyq.png" class="img"></image>
					</view>
				</view>
				<view class="close_popup iconfont iconguanbi" @click="closePopup('share')"></view>
			</view>
		</uni-popup>
		<uni-popup type="center" ref="showEvm">
			<view class="evm_buy_popup_body">
				<view class="p_title">
					前去APP购买
				</view>
				<view class="p1">
					截图保存 , 扫描二维码
				</view>
				<view class="p1">
					下载APP前去APP购买
				</view>
				<view class="evm_img">
					<image src="../../static/img/evm.png" class="img"></image>
				</view>
				<view class="close_popup iconfont iconguanbi" @click="closePopup('evm')"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showShareIcon:true
			};
		},
		mounted() {
			
		},
		onShow() {
			this.$store.commit('setPsType', 200)
		},
		onLoad(ph) {
			if(ph.showShareIcon == 'false'){
				this.showShareIcon = false
			}
		},
		onBackPress() {
			uni.switchTab({
				url:"../home/home"
			})
			return true;
		},
		methods:{
			openPopup(){
				this.$refs.showshare.open();
			},
			orderTrue(el){
				if(el == 'evm'){
					this.$refs.showEvm.open();
				}else{
					uni.navigateTo({
						url:"../order/orderTrue?pageType=goodsDetail"
					})
				}
			},
			shareTo(el){
				uni.navigateTo({
					url:'../login/buyGoodsJoin'
				})
			},
			closePopup(el){
				if(el == 'evm'){
					this.$refs.showEvm.close();
				}
				if(el == 'share'){
					this.$refs.showshare.close();
				}
			}
		}
	}
</script>

<style lang="scss">
	.evm_buy_popup_body{
		text-align: center;
		background-color: #fff;
		color: #666;
		padding: 26upx 60upx;
		border-radius: 12upx;
		position:relative;
		.close_popup{
			position: absolute;
			font-size: 28upx;
			top: 20upx;
			right: 20upx;
			padding: 10upx;
			color: #999;
		}
		.p_title{
			font-weight: bold;
			font-size: 36upx;
			margin-bottom: 6upx;
		}
		.evm_img{
			margin-top: 10upx;
			.img{
				width: 400upx;
				height: 400upx;
			}
		}
	}
	.share_to_popup_body{
		width: 750upx;
		background-color: #fff;
		height: 300upx;
		position: relative;
		.close_popup{
			position: absolute;
			font-size: 28upx;
			top: 20upx;
			right: 20upx;
			padding: 10upx;
			color: #999;
		}
		.title{
			text-align: center;
			padding: 30upx 0 50upx;
		}
		.imgs{
			display: flex;
			justify-content: center;
			.item{
				.img{
					width: 100upx;
					height: 100upx;
				}
				&+.item{
					margin-left: 80upx;
				}
			}
		}
	}
	.goods_detail {
		background-color: #f0f0f0;
		padding-bottom: 120upx;
		.goods_detail_img {
			width: 100%;
		}

		.info {
			padding: 26upx;
			background-color: #fff;

			.t1 {
				display: flex;
				justify-content: space-between;

				.left {
					display: inline-flex;
					align-items: center;

					.red {
						font-size: 34upx;
						margin-right: 20upx;
						font-weight: bold;
					}

					.olm {
						color: #999;
					}
				}
			}

			.t2 {
				font-size: 34upx;
				padding: 6upx 0;
			}
		}
		.p_img_body{
			.img{
				line-height: 0;
			}
		}
		.btm_share_bar{
			width: 750upx;
			display: flex;
			align-items: center;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 16upx 26upx;
			box-sizing: border-box;
			justify-content: space-between;
			.left{
				text-align: center;
				transform: scale(.9);
				display: inline-flex;
				align-items: center;
				.l1{
					margin-right: 60upx;
					.iconxin{
						font-size: 50upx;
					}
					.iconfenxiang{
						font-size: 40upx;
						margin-bottom: 2upx;
					}
				}
			}
		}
	}
</style>
