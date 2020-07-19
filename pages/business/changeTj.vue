<template>
	<view class="change_tj">
		<view class="zy">
			注意 : 推荐人只能更换一次,确认更换后便不可再更改
		</view>
		<view class="search">
			<view class="input_s">
				<text class="iconfont iconxinhan"></text>
				<input type="text" v-model="yqm" placeholder="请输入新的邀请码" class="input" />
			</view>

			<view class="">
				<button class="btn blue round ms" @click="searchB">搜索</button>
			</view>


		</view>
		<view class="vhidden">
			<view class="p_info" v-if="yqm != ''">
				<image src="../../static/img/tjr.png" class="se_img"></image>
				<view class="name">
					张苏梦
				</view>
				<view class="phone">
					<text class="iconfont icon19 orange"></text>手机号
				</view>
				<view class="p">
					191*****8945
				</view>
			</view>
		</view>

		<view class="sub_btn">
			<button class="btn round lg" :class="yqm == '' ? 'default' : 'blue'" @click="changeTj">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yqm: ""
			};
		},
		methods: {
			searchB() {
				this.yqm = "898890"
			},
			changeTj(){
				uni.navigateTo({
					url:"../home/msg?pageType=changeTj"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.change_tj {
		.sub_btn {
			padding: 0 50upx;

			.btn {
				&.default {
					background-color: #999999;
				}
			}
		}

		.zy {
			padding: 26upx;
			background-color: $uni-bl;
			color: #fff;
		}

		.search {
			display: flex;
			padding: 200upx 26upx 20upx 100upx;
			align-items: center;

			.input_s {
				display: inline-flex;
				align-items: center;
				border-bottom: 1upx solid #eee;
				margin-right: 40upx;

				.input {
					padding: 26upx;
				}
			}
		}

		.vhidden {
			height: 416upx;

			.p_info {
				text-align: center;
				padding: 40upx 0 60upx;

				.se_img {
					width: 120upx;
					height: 120upx;
				}

				.name {
					font-size: 38upx;
					padding-top: 6upx;
				}

				.phone {
					font-size: 32upx;
					padding: 40upx 0 20upx;
				}

				.iconfont {
					margin-right: 6upx;
					font-size: 32upx;
				}

				.p {
					color: #999;
				}
			}
		}
	}
</style>
