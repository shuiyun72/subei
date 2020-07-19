<template>
	<view class="vip_get_money">
		<view class="popup_evm_l">
			<view class="h_top">
				<text class="iconfont iconB"></text>
				二维码收款
			</view>
			<view class="get_body">
				<view class="t">
					张萌萌 要求您成为塑贝会员
				</view>
				<view class="t">
					塑贝会员支付199元
				</view>
				<image src="../../static/img/evm.png" class="get_img"></image>
				<view class="blue">
					成为会员得超值大礼包
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.vip_get_money{
	background-color: $uni-bl;
	height: 100vh;
	color: #555;
	display: flex;
	justify-content: center;
	.popup_evm_l{
		width: 700upx;
		border-radius: 16upx;
		overflow: hidden;
		margin-top: 160upx;
		.h_top{
			background-color: #D5FFF9;
			font-size: 40upx;
			padding: 22upx 26upx;
			.iconfont{
				font-size: 50upx;
				margin-right: 10upx;
				display: inline-block;
			}
		}
		.get_body{
			background-color: #fff;
			text-align: center;
			padding: 40upx 0;
			.t{
				font-size: 36upx;
				font-weight: bold;
				color: #777;
				padding: 10upx 0;
			}
			.get_img{
				width: 400upx;
				height: 400upx;
			}
			.blue{
				font-size: 36upx;
			}
		}
	}
}
</style>
