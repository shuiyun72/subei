<template>
	<view class="my_lucky" @click="nativeTo">
		<view class="m_title">
			会员礼包
		</view>
		<view class="m_card">
			<image src="../../static/img/huiylb.png" class="img"></image>
			<view class="right">
				<view class="c1">
					<text class="red">会员</text>礼包
				</view>
				<view class="c2">
					超值好礼专属产品
				</view>
			</view>
		</view>
		<view class="m_title">
			尊享礼包
		</view>
		<view class="lucky_list">
			<view class="item" v-for="item in 3">
				<view class="imgs">
					<image src="../../static/img/lbxq1.png" class="img"></image>
					<image src="../../static/img/lbxq2.png" class="img"></image>
				</view>
				<view class="p1">
					会员尊享
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
		},
		methods: {
			nativeTo() {
				uni.navigateTo({
					url: '../member/199member?pageType=mine'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my_lucky {
		background-color: #f0f0f0;
		padding: 0 26upx;

		.m_title {
			padding: 40upx 0 16upx;
			font-size: 38upx;
			font-weight: bold;
			color: #666;
		}

		.m_card {
			background-color: #fff;
			padding: 40upx 26upx;
			display: flex;
			align-items: center;
			border-radius: 12upx;

			.img {
				width: 90upx;
				height: 60upx;
			}

			.right {
				margin-left: 30upx;

				.c1 {
					font-size: 38upx;
				}

				.c2 {
					font-size: 32upx;
					color: #999;
					margin-top: 16upx;
				}
			}
		}

		.lucky_list {
			.item {
				padding: 16upx;
				background-color: #fff;
				margin-bottom: 26upx;

				.imgs {
					display: flex;
					justify-content: space-between;

					.img {
						width: 330upx;
						height: 330upx;
					}
				}

				.p1 {
					font-size: 38upx;
					color: #666;
					padding: 16upx 0;
				}
			}
		}
	}
</style>
