<template>
	<view class="sc_bar3_detail">
		<view class="s_t_img">
			<image src="../../static/img/home/kc1.png" mode="widthFix" class="img"></image>
			<view class="info_box">
				<view class="t_t">
					疫情之下：企业如何生
					存教你拥有危机思维
				</view>
				<view class="info">
					<view class="money red">
						￥.16.00
					</view>
					<view class="name">
						张鹏宇
					</view>
				</view>
				<view class="icon_list">
					<view class="item" @click="openPopup">
						<view class="iconfont iconfenxiang1"></view>
						<view class="text">分享</view>
					</view>

					<view class="item">
						<view class="iconfont icondownload"></view>
						<view class="text">下载</view>
					</view>
					<view class="item active">
						<!-- 未收藏 -->
						<view class="iconfont iconshoucang"></view>
						<view class="text">收藏</view>
						<!-- 已收藏 多个 red -->
						<!-- <view class="iconfont iconshoucang red"></view>
						<view class="text">收藏</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="scl_content" v-if="tabSel == 0">
			<view class="scl_content_body" v-if="haveItem != ''">
				<view class="text_sc">
					今天，婉清就来跟大家聊聊正确的护肤步骤。
				</view>
				<view class="text_sc">
					一．春夏：洗面奶---水---精华---乳液。
				</view>
				<view class="text_sc">
					秋冬：洗面奶---水---精华---霜。
				</view>
				<view class="text_sc">
					乳液和霜的区别主要是质地上的区别，比如同一个系列的乳液和面霜产品的功效基本一致，只是乳液的质地轻薄一些，含更多的水分，适合夏天和油性肌肤，更为清爽。
				</view>
				<view class="text_sc">
					而面霜的质地更加丰厚，含的油脂比较多，适合干燥的冬天和干性皮肤，更加地保湿锁水
				</view>
				<image src="../../static/img/home/kc1.png" mode="widthFix" class="img"></image>
				<view class="text_sc">
					二．普通护肤品的使用顺序
				</view>
				<view class="text_sc">
					普通护肤品是以其成分的分子大小所决定的使用顺序，分子越小的越先使用，如：水、精华液、乳液、乳霜、霜状护肤品，然后才是油性护肤品。因为这些大小不同的分子各自含有不同的养分，并且对肌肤也发挥着不同的效用。最简单的判断使用顺序的方法就是：质地越稀薄、越清爽的越先用。
				</view>
				<view class="text_sc">
					因为越是偏向霜状的产品，其滋润度越高，涂抹之后就会在肌肤外面形成一层保护膜
				</view>
				<view class="text_sc">
					所以如果你先用霜状的产品，它已经在皮肤表层形成了一层保护膜，你再用水，用精华等小分子的产品，这些小分子便无法渗透进皮肤到达深层去发挥功效。很多女孩子真的以为抹了就万事大吉了，不管步骤。
				</view>
			</view>
			<image src="../../static/img/kcw.jpg" mode="widthFix" class="img" v-if="haveItem == ''"></image>
		</view>
		<view class="scl_content" v-if="tabSel == 1">
			<image src="../../static/img/kcjs.png" mode="widthFix" class="img"></image>
		</view>
		<view class="but_bot_btn">
			<button class="btn blue lg" @click="buyBtn" v-if="haveItem == ''">立即购买</button>
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
		<uni-popup type="bottom" ref="orderPay">
			<view class="order_pay_popup">
				<view class="p1 red">￥160.00</view>
				<view class="p2">
					商品购买
				</view>
				<radio-group class="block" @change="RadioChange">
					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/ye.png"></image><text class="margin-left-xs">余额支付<text class="sm_info blue">账户余额800元</text></text>
						</view>
						<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A" class="radio" color="#31C5AF"></radio>
					</view>

					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/weixin.png"></image><text class="margin-left-xs">微信支付</text>
						</view>
						<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B" class="radio" color="#31C5AF"></radio>
					</view>
					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/zfb.png"></image><text class="margin-left-xs">支付宝支付</text>
						</view>
						<view>
							<radio :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C" class="radio" color="#31C5AF"></radio>
						</view>
					</view>
				</radio-group>
				<view class="r_btn">
					<button class="btn blue round lg" @click="orderTrue">立即支付</button>
				</view>
				<view class="close iconfont iconguanbi" @click="closePopup('buy')"> </view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabSel: 0,
				radio: 'A',
				tabList: [{
					text: "课程内容",
					type: 0
				}, {
					text: "课程介绍",
					type: 1
				}],
				haveItem:""
			};
		},
		onLoad(ph) {
			if(ph.item){
				this.haveItem = ph.item
			}
		},
		methods: {
			selectTab(el, i) {
				this.tabSel = i;

			},
			openPopup() {
				this.$refs.showshare.open();
			},
			shareTo(el) {
				uni.navigateTo({
					url: '../login/buyGoodsJoin'
				})
			},
			closePopup(el) {
				if (el == 'buy') {
					this.$refs.orderPay.close();
				}
				if (el == 'share') {
					this.$refs.showshare.close();
				}
			},
			buyBtn() {
				this.$refs.orderPay.open();
			},
			RadioChange(e) {
				this.radio = e.detail.value;
			},
			orderTrue(){
				uni.navigateTo({
					url: "../home/msg?&pageType=schoolBuy"
				})	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order_pay_popup {
		background-color: #fff;
		padding: 40upx 0;
		border-radius: 12upx 12upx 0 0;
		position: relative;

		.close {
			position: absolute;
			right: 20upx;
			top: 20upx;
			font-size: 28upx;
			padding: 10upx;
		}

		.p1 {
			font-size: 34upx;
			text-align: center;
		}

		.p2 {
			text-align: center;
			padding: 12upx 0 60upx;
		}

		.r_btn {
			padding: 40upx 40upx 30upx;
		}

		.cu-form-group_sy {
			display: flex;
			justify-content: space-between;
			padding: 16upx 26upx;
			background-color: #fff;
			border-top: 1upx solid rgba(0, 0, 0, .1);

			.pay_img {
				width: 44upx;
				height: 44upx;
			}

			.item {
				display: inline-flex;
				align-items: center;

				.sm_info {
					transform: scale(.8);
					display: inline-block;
				}

				.margin-left-xs {
					margin-left: 10upx;
					font-size: 28upx;
					color: #666;
				}
			}

			.radio {
				transform: scale(.7);
			}
		}

	}

	.share_to_popup_body {
		width: 750upx;
		background-color: #fff;
		height: 300upx;
		position: relative;

		.close_popup {
			position: absolute;
			font-size: 28upx;
			top: 20upx;
			right: 20upx;
			padding: 10upx;
			color: #999;
		}

		.title {
			text-align: center;
			padding: 30upx 0 50upx;
		}

		.imgs {
			display: flex;
			justify-content: center;

			.item {
				.img {
					width: 100upx;
					height: 100upx;
				}

				&+.item {
					margin-left: 80upx;
				}
			}
		}
	}

	.sc_bar3_detail {
		color: #333;
		padding-bottom: 160upx;

		.but_bot_btn {
			position: fixed;
			bottom: 0;
			left: 0;

			width: 750upx;

			.btn {
				padding: 36upx 0;
				border-radius: 0;
			}

		}

		.tab_list_sy {
			display: flex;
			font-size: 36upx;
			justify-content: space-around;
			background-color: #fff;
			border-top: 26upx solid #eee;

			.item {
				border-bottom: 6upx solid transparent;
				padding: 20upx 0 16upx;

				&.active {
					color: $uni-bl;
					border-bottom: 6upx solid $uni-bl;
				}
			}
		}

		.s_t_img {
			background-color: #fff;
			padding: 0upx 0 26upx;

			.img {
				width: 100%;
			}
		}

		.info_box {
			padding: 16upx 12upx 20upx;
			background-color: #fff;

			.t_t {
				font-size: 32upx;
			}

			.info {
				display: flex;
				justify-content: space-between;
				padding: 20upx 0 16upx;
			}

			.icon_list {
				display: flex;
				justify-content: space-around;
				padding: 30upx 0;

				.item {
					width: 20%;
					text-align: center;

					.iconfont {
						font-size: 60upx;
					}
				}
			}
		}

		.scl_content_body{
			color: #666;
			padding: 26upx;
			.text_sc{
				margin-bottom: 30upx;
				line-height: 50upx;
			}
			.img{
				width: 100%;
				height: 380upx;
			}
		}
	}
</style>
