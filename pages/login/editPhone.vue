<template>
	<view class="edit_phone">
		<view class="edit_body">
			<view class="icon_input_sy">
				<view class="iconfont icon19"></view>
				<input class="input" type="text" v-model="phone" placeholder="请输入手机号" />
				<text class="iconfont iconshouye_shugang_shijiantixing"></text>
				<text class="yzm" @click="getYZM" v-if="timeout<0">发送验证码</text>
				<text class="yzm" v-if="timeout>=0">{{timeout}}s 重新获取</text>
			</view>
			<view class="icon_input_sy" v-if="isShow">
				<view class="iconfont iconyanzhengma2"></view>
				<input class="input" type="text" v-model="yzm" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="sub_top">
			<button class="btn blue ms round" @click="next">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				phone: "",
				yzm: "",
				timeout: -1
			};
		},
		onShow() {

		},
		methods: {
			getYZM() {

			},
			next(){
				uni.navigateTo({
					url:"../home/msg?pageType=editPhone"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.edit_body{
		padding: 120upx 0 100upx;
	}
	.edit_phone {
		.s_bz {
			padding-top: 10upx;
			color: #999;
			transform: scale(.9);
			text-align: center;
		}
	}

	.mine_l_t {
		text-align: center;

		.t {
			padding: 100upx 0 50upx;
		}

		.wx {
			width: 80upx;
		}
	}

	.mine_l {
		text-align: center;
		margin-bottom: 50upx;

		.mine_logo {
			width: 230upx;
		}
	}

	.sub_top {
		margin-top: 160upx;
	}

	.edit_phone {
		padding: 40upx 60rpx 0 60rpx;

		.iconshouye_shugang_shijiantixing {
			font-size: 38upx;
			color: #999;
		}

		.yzm {
			font-size: 25upx;
			color: $uni-bl;
		}
	}

	.login_wjmm {
		font-size: 20upx;
		color: #999;
		padding: 20upx 0 90upx;

		&.b {
			color: #333;
		}
	}
</style>
