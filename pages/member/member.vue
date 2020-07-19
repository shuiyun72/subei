<template>
	<view class="member">
		<view class="membet_t_img">
			<image src="../../static/img/hyzx.jpg" class="img" mode="widthFix"></image>
		</view>
		<view class="member_body">
			<view class="memebt_title_sy">
				塑贝会员尊享礼包
			</view>
			<view class="item" v-for="i in 4" @click="toMember199">
				<view class="imgs">
					<image src="../../static/img/home/lb1.png" class="img"></image>
					<image src="../../static/img/home/lb2.png" class="img"></image>
				</view>
				<view class="t_t">
					会员尊享
				</view>
				<view class="info">
					<view class="l">
						<view class="red">￥199.00</view>
						<view class="text_d">原价￥299.00</view>
					</view>
					<view class="r">
						<button class="btn mini blue_n round">立即购买</button>
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

			};
		},
		computed:{
			isVip(){
				return this.$store.state.isVip
			}
		},
		onShow() {
			if(!this.isVip){
				uni.showModal({
					title: "会员",
					content: "您还不是会员,不能进入会员尊享,请先去购买会员",
					confirmText: "确定",
					confirmColor:"#3AC7B2",
					cancelText: "取消",
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:"./showVip"
							})
						}else{
							uni.switchTab({
								url:"../home/home"
							})
						}
					}
				})
			}
		},
		methods:{
			toMember199(){
				uni.navigateTo({
					url:"../member/199member"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.member {
		.membet_t_img {
			line-height: 0;

			.img {
				width: 750upx;
			}
		}

		.member_body {
			// background-image: linear-gradient(to bottom,#2FC6BB, #018AE7);
			background-color: #2FC6BB;
			padding: 0 26upx 40upx;

			.memebt_title_sy {
				font-size: 38upx;
				color: #f0f0f0;
				padding-bottom: 30upx;
				&::before {
					content: "";
					width: 6upx;
					height: 30upx;
					background-color: #f0f0f0;
					display: inline-block;
					margin-right: 16upx;
				}
			}

			.item {
				width: 698upx;
				background-color: #fff;
				padding: 16upx 16upx 30upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.l {
						display: inline-flex;

						.red {
							font-size: 32upx;
							margin-right: 20upx;
						}
					}

					.r {
						text-align: right;

						.mini {
							padding: 12upx 26upx;
							// transform: scale(1.2);
						}
					}
				}

				.t_t {
					padding: 16upx 0 16upx;
					color: #333;
					font-size: 32upx;
				}

				.imgs {
					display: flex;
					justify-content: space-between;

					.img {
						width: 325upx;
						height: 325upx;
					}
				}
			}

		}
	}
</style>
