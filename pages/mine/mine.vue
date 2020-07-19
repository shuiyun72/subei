<template>
	<view class="mine">
		<view class="top_mine">
			<view class="pt1">
				<image src="../../static/img/toux.png" class="top_img"></image>
				<view class="top_info">
					<view class="name">
						杨晓晓
					</view>
					<view class="phone">
						18236363653
					</view>
					<view class="sm_t1">
						<image src="../../static/img/hyvip.png" class="t1_img"></image>
						会员
					</view>
				</view>
			</view>
			<view class="yqm_r">
				邀请码 : 889922
			</view>
			<view class="order_bar">
				<view class="pt2">
					<view class="l">
						我的订单
					</view>
					<view class="" @click="naviteTo('bar5')">
						查看全部订单
					</view>
				</view>
				<view class="p2_list">
					<view class="item" v-for="item in orderList" @click="naviteTo(item.url)">
						<image :src="'../../static/img/mine/'+item.img" class="order_img"></image>
						<view class="text">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="share_buy" @click="shareF">
			<view class="left">
				<view class="ti">
					分享好友购买
				</view>
				<view class="info_l">
					好友购买成功您即获取返佣收益
				</view>
			</view>
			<view class="">
				<image src="../../static/img/mine/jinb.png" class="fd"></image>
			</view>
		</view>
		<view class="set_mine_list">
			<view class="item" v-for="item in setMineList" @click="handleSet(item.url)">
				<image :src="'../../static/img/mine/'+item.img" class="img"></image>
				<view class="text">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				orderList: [{
						img: "dfk.png",
						text: "待付款",
						url: "bar1"
					},
					{
						img: "dfh.png",
						text: "待发货",
						url: "bar2"
					},
					{
						img: "dsh.png",
						text: "待收货",
						url: "bar3"
					},
					{
						img: "ywc.png",
						text: "已完成",
						url: "bar4"
					}
				],
				setMineList: [{
						img: "wdkc.png",
						text: "我的课程",
						url: "set1"
					},
					{
						img: "wdlb.png",
						text: "我的礼包",
						url: "set2"
					},
					{
						img: "shdz.png",
						text: "收货地址",
						url: "set3"
					},
					{
						img: "kfzx.png",
						text: "客服中心",
						url: "set4"
					},
					{
						img: "wdsc.png",
						text: "我的收藏",
						url: "set5"
					},
					{
						img: "sybz.png",
						text: "使用帮助",
						url: "set6"
					},
					{
						img: "mlfk.png",
						text: "美丽反馈",
						url: "set7"
					},
					{
						img: "qchc.png",
						text: "清理缓存",
						url: "set8"
					},
					{
						img: "sz.png",
						text: "设置",
						url: "set9"
					}
				]
			};
		},
		methods: {
			naviteTo(url) {
				if (url == 'bar1') {
					uni.navigateTo({
						url: '../order/order?tabSel=0'
					})
				} else
				if (url == 'bar2') {
					uni.navigateTo({
						url: '../order/order?tabSel=1'
					})
				} else
				if (url == 'bar3') {
					uni.navigateTo({
						url: '../order/order?tabSel=2'
					})
				} else
				if (url == 'bar4') {
					uni.navigateTo({
						url: '../order/order?tabSel=3'
					})
				} else
				if (url == 'bar5') {
					uni.navigateTo({
						url: '../order/order?tabSel=4'
					})
				}
			},
			shareF() {
				uni.navigateTo({
					url: '../business/haibao'
				})
			},
			handleSet(url) {
				if (url == 'set1') {
					uni.navigateTo({
						url: '../school/myStudy'
					})
				} else
				if (url == 'set2') {
					uni.navigateTo({
						url: './myLucky'
					})
				} else
				if (url == 'set3') {
					uni.navigateTo({
						url:'../mine/address?pageType=mine'
					})
				} else
				if (url == 'set4') {
					uni.navigateTo({
						url:'../home/callKf'
					})
				} else
				if (url == 'set5') {
					uni.navigateTo({
						url:'./collect'
					})
				} else
				if (url == 'set6') {
					uni.navigateTo({
						url:'./help'
					})
				} else
				if (url == 'set7') {
					uni.navigateTo({
						url:'./returnMsg'
					})
				} else
				if (url == 'set8') {
					// 清理缓存
				} else
				if (url == 'set9') {
					uni.navigateTo({
						url:'./set'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		.top_mine {
			background: #f0f0f0 url(../../static/img/wdbg.png) no-repeat top center;
			height: 530upx;
			background-size: 750upx 420upx;
			position: relative;

			.yqm_r {
				position: absolute;
				top: 130upx;
				right: 0;
				background-color: #1BB09A;
				padding: 12upx 12upx 12upx 24upx;
				color: #fff;
				border-radius: 30upx 0 0 30upx;
			}

			.pt1 {
				display: flex;
				padding: 60upx 26upx 0;

				.top_img {
					width: 140upx;
					height: 140upx;
				}

				.top_info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					color: #fff;
					margin-left: 16upx;

					.name {
						font-size: 36upx;
					}

					.phone {
						margin-bottom: 6upx;
					}

					.sm_t1 {
						background-color: #fff;
						color: #FFA200;
						padding: 4upx 20upx;
						border-radius: 20upx;
						transform: scale(.9);
						text-align: center;
						width: 110upx;

						.t1_img {
							margin-right: 6upx;
							width: 40upx;
							height: 30upx;

						}
					}

				}
			}

			.order_bar {
				background-color: #fff;
				width: 698upx;
				box-sizing: border-box;
				padding: 26upx;
				border-radius: 12upx;
				margin: 0 26upx;
				color: #666;
				box-shadow: 0 0 1upx 2upx #eee;
				margin-top: 40upx;

				.pt2 {
					display: flex;
					justify-content: space-between;

					.l {
						font-size: 34upx;
					}
				}

				.p2_list {
					display: flex;
					justify-content: space-around;
					padding: 20upx 0 20upx;
					border-top: 1upx solid #eee;
					margin-top: 16upx;

					.item {
						.order_img {
							width: 80upx;
							height: 80upx;
						}
					}
				}
			}

		}

		.share_buy {
			border-bottom: 26upx solid #f0f0f0;
			display: flex;
			justify-content: space-between;
			padding: 30upx 40upx 40upx;

			.left {
				.ti {
					font-size: 36upx;
					font-weight: bold;
					color: #666;
					padding: 20upx 0 14upx;
				}

				.info_l {
					color: #999;
				}
			}

			.fd {
				width: 140upx;
				height: 120upx;
			}
		}

		.set_mine_list {
			display: flex;
			flex-wrap: wrap;
			padding: 20upx 26upx;

			.item {
				width: 25%;
				margin-bottom: 20upx;
				text-align: center;
				color: #666;

				.img {
					width: 90upx;
					height: 90upx;
				}
			}
		}
	}
</style>
