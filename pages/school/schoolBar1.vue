<template>
	<view class="school_bar1">
		<view class="sc_body">
			<view class="s_t1_list">
				<view class="item" v-for="item in 4" @click="cDetali(item)">
					<image src="../../static/img/bbxx2.png" class="img"></image>
					<view class="info_box">
						<view class="t_t">
							疫情之下：企业如何生
							存教你拥有危机思维
						</view>
						<view class="info">
							<view class="money red">
								免费
							</view>
							<view class="name">
								张鹏宇
							</view>
						</view>
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
		methods:{
			cDetali(){
				uni.navigateTo({
					url:"./scBar1Detail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.school_bar1 {
		background-color: #f0f0f0;
		min-height: 100vh;
		.sc_body {
			color: #666;
			padding: 26upx 26upx 0;

			.s_title {
				font-size: 32upx;

				&::before {
					content: "";
					display: inline-block;
					width: 8upx;
					height: 32upx;
					background-color: $uni-bl;
					margin-right: 20upx;
					position: relative;
					top: 6upx;
				}
			}

			.s_t1_list {
				display: flex;
				flex-wrap: wrap;
				padding: 16upx 0;
				justify-content: space-between;

				.item {
					width: 340upx;
					margin-bottom: 20upx;

					.img {
						width: 100%;
						height: 170upx;
					}

					.info_box {
						padding: 0 12upx 20upx;
						background-color: #fff;

						.info {
							display: flex;
							justify-content: space-between;
							padding: 20upx 0 16upx;
						}
					}
				}
			}
		}

	}
</style>
