<template>
	<view class="bind_vx">
		<view class="t_img">
			<image src="../../static/img/weixin.png" class="img"></image>
		</view>
		<view class="msg_title">
			绑定微信号
		</view>
		<label>
			<view class="mine_vx">
				<view class="iconfont iconweixin1"></view>
				<view class="input_text">
					<text :class="{'vs':vx != ''}">请填写本人微信号</text>
					<input type="text" v-model="vx" class="input" />
				</view>

			</view>
		</label>
		<view style="height:120upx"> </view>
		<view class="msg_btn">
			<button class="lg btn blue round" @click="next">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vx: ""
			};
		},
		methods:{
			next(){
				uni.navigateTo({
					url:"../home/msg?pageType=bindVx"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bind_vx {
		.mine_vx {
			display: flex;
			align-items: center;
			padding: 16upx 0;
			border-bottom: 1upx solid #eee;
			margin: 40upx auto;
			width: 500upx;

			.iconfont {
				font-size: 60upx;
				color: #999;
			}

			.input_text {
				padding: 26upx;
				color: $uni-bl;
				font-size: 36upx;
				position: relative;

				.vs {
					visibility: hidden;
				}

				.input {
					padding: 0 26upx;
					color: $uni-bl;
					font-size: 36upx;
					position: absolute;
					top: 24upx;
					left: 0;
					width: 600upx;
				}
			}

		}

		.t_img {
			padding: 120upx 0 40upx;
			text-align: center;

			.img {
				width: 140upx;
				height: 140upx;
			}
		}

		.msg_title {
			font-size: 36upx;
			font-weight: bold;
			text-align: center;
			color: #666;
		}

		.msg_btn {
			padding: 0 60upx;
		}
	}
</style>
