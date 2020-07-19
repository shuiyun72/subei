<template>
	<view class="member199">
		<view class="img_in">
			<image src="../../static/img/lbxq1.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_in">
			<image src="../../static/img/lbxq2.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_in">
			<image src="../../static/img/lbxq3.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_in">
			<image src="../../static/img/lbxq4.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_in_t">
			<image src="../../static/img/libsm.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_in_box">
			<image src="../../static/img/biank.png" mode="widthFix" class="img"></image>
			<view class="position_text">
				<view class="text" v-for="item in textList">
					
					
						<text class="l"></text>{{item.text}}
					
				</view>
			</view>
		</view>
		<view class="btm_share_bar" v-if="pageType != 'mine'">
			<view class="left member199_b">
				<text class="iconfont iconhuiyuan"></text>199会员尊享礼包
			</view>
			<view class="r_btn">
				<button class="btn blue round ms" @click="orderTrue">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textList:[
					{text:"购买199尊享大礼包，即免费获得大礼包内的所有商品"},
					{text:"礼包包含洗面奶、面膜、护肤套装"},
					{text:"所有商品均为正品"},
					{text:"所有商品均为正品"},
					{text:"本软件有最终解释权"},
					{text:"本软件有最终解释权"}
				],
				pageType:""
			};
		},
		onLoad(ph) {
			if(ph.pageType=='mine'){
				this.pageType = ph.pageType
			}
		},
		methods:{
			orderTrue(){
				uni.navigateTo({
					url:"../order/orderTrue?pageType=vip199"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.member199 {
		padding-bottom: 200upx;
		.btm_share_bar {
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
			border-top: 1upx solid #eee;
			.left {
				text-align: center;
		
				&.member199_b {
					font-size: 32upx;
					color: $uni-bl;
					.iconfont{
						margin-right: 6upx;
					}
				}
			}
		}
		.img_in {
			line-height: 0;

			.img {
				width: 750upx;
			}
		}

		.img_in_t {
			text-align: center;
			padding: 30upx 0;

			.img {
				width: 500upx;
			}
		}

		.img_in_box {
			text-align: center;
			position:relative;
			.position_text{
				position: absolute;
				top: 0;
				left: 0;
				padding: 26upx 90upx;
				.text{
					text-align: left;
					color: #666;
					line-height: 60upx;
					.l{
						width: 10upx;
						height: 10upx;
						background-color: #333;
						display: inline-block;
						border-radius: 50%;
						margin-right: 20upx;
					}
				}
			}
			.img {
				width: 660upx;
			}
		}
	}
</style>
