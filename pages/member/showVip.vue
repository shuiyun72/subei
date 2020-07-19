<template>
	<view class="show_vip">
		<view class="top_img">
			<image src="../../static/img/showvip.png" class="img"></image>
			<view class="buy_vip_btn" @click="next">
				
			</view>
		</view>
		<view class="title_img">
			<image src="../../static/img/vip/hytq.png" class="img"></image>
		</view>
		<view class="vip_list">
			<view class="item" v-for="item in vipList" @click="barNative(item.url)">
				<image :src="'../../static/img/vip/'+item.img" class="img_v"></image>
				<view class="right">
					<view class="t">
						{{item.text}}
					</view>
					<view class="text">
						{{item.info}}
					</view>
				</view>
			</view>
		</view>
		<view class="title_img">
			<image src="../../static/img/vip/tqsm.png" class="img"></image>
		</view>
		<view class="vip_text_box">
			<view class="title_v">
				1、免费领取超值好礼
			</view>
			<view class="text_v">
				购买VIP即获得价值699的塑贝超值大礼包，可自提可包邮。
			</view>
			<view class="title_v">
				2、分享赚钱
			</view>
			<view class="text_v">
				将VIP会员和好物分享给好友，好友购买，即获得现金返佣，可提现
			</view>
			<view class="title_v">
				3、购买省钱
			</view>
			<view class="text_v">
				成为会员后可尊享会员礼包，超低价格超多优惠物超所值
			</view>
			<view class="title_v">
				4、专属特权
			</view>
			<view class="text_v">
				享受VIP专属特权，可生成不同邀请海报，可分享，可下载
			</view>
		</view>
		<view class="buy_btn">
			<button class="btn" @click="next">立即购买</button>
		</view>
		<uni-popup type="center" ref="vipPopup">
			<view class="popup_vip">
				<image src="../../static/img/vip/pap.png" class="img"></image>
				<view class="close iconfont iconguanbi" @click="closePopup"> </view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vipPopup:false,
				vipList:[
					{img:"bkzs.png",text:"贝壳专属",info:"专属特大礼包",url:"bar1"},
					{img:"zjyh.png",text:"直降优惠",info:"VIP专享优惠",url:"bar2"},
					{img:"tjbk.png",text:"推荐贝壳",info:"获取返佣",url:"bar3"},
					{img:"yxzt.png",text:"永享直推",info:"贝壳分润",url:"bar4"}
				]
			};
		},
		methods:{
			next(){
				uni.navigateTo({
					url:'../order/orderTrue?pageType=buyVip'
				})
			},
			barNative(el){
				this.$refs.vipPopup.open();
			},
			closePopup(){
				this.$refs.vipPopup.close();
			}
		}
	}
</script>

<style lang="scss" scoped>
.show_vip{
	background-color: #f0f0f0;
	padding-bottom: 160upx;
	.popup_vip{
		position:relative;
		.close{
			position: absolute;
			top: 20upx;
			right: 20upx;
			font-size: 32upx;
			padding: 10upx;
			color: #999;
		}
		.img{
			width: 600upx;
			height: 700upx;
		}
	}
	.top_img{
		padding: 26upx;
		background-color: #fff;
		position:relative;
		.buy_vip_btn{
			width: 240upx;
			height: 70upx;
			position: absolute;
			top: 80upx;
			right:30upx;
		}
		.img{
			width: 100%;
			height: 330upx;
		}
	}
	.title_img{
		padding: 36upx 160upx;
		.img{
			width: 100%;
			height: 32upx;
		}
	}
	.vip_list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 26upx;
		justify-content: space-between;
		.item{
			background-color: #fff;
			display: inline-flex;
			width: 340upx;
			box-sizing: border-box;
			padding: 26upx;
			margin-bottom: 20upx;
			align-items: center;
			.right{
				margin-left: 16upx;
				color: #666;
				.t{
					font-size: 34upx;
					font-weight: bold;
					margin-bottom: 10upx;
				}
			}
			.img_v{
				width: 90upx;
				height: 90upx;
			}
		}
	}
	.vip_text_box{
		padding: 0 26upx;
		.title_v{
			font-size: 36upx;
			color: $uni-bl;
		}
		.text_v{
			font-size: 32upx;
			color: #999;
			padding:10upx 0 30upx 60upx;
			
		}
	}
	.buy_btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		.btn{
			background-color: $uni-bl;
			color: #fff;
			font-size: 36upx;
			padding: 34upx 0;
			border-radius: 0;
		}
	}
}
</style>
