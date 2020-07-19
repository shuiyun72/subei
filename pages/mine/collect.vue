<template>
	<view class="collect">
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="coll_body1" v-if="tabSel == 0">
			<view class="item_box" v-for="item in p6List">
				<image :src="'../../static/img/home/'+item.img" class="p6_t_img"></image>
				<view class="item_info">
					<view class="text">
						{{item.text}}
					</view>
					<view class="info">
						<view class="blue">剩余{{item.last}}件</view>
						<view class="r orange">
							<view class="iconfont iconshoucang"></view>
							已收藏
						</view>
					</view>
					<view class="money">
						<view class="m1">￥{{item.m1}}</view>
						<view class="text_d">￥{{item.om}}</view>
					</view>
				</view>

			</view>

		</view>
		<view class="sc2_list">
			<view class="item" v-for="item in 4" @click="studyDetail">
				<image src="../../static/img/tuij1.png" class="img"></image>
				<view class="sc2_info">
					<view class="">
					每日投资小课堂分享投资
					经验
					</view>
					<view class="isz">
						<view class="name">
							张云鹏
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
				tabSel: 0,
				tabList: [{
					text: "商品",
					type: 0
				}, {
					text: "课程",
					type: 1
				}],
				p6List: [{
						img: "spt1.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00",
						isH:0
					},
					{
						img: "spt2.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00",
						isH:1
					}
				]
			};
		},
		methods: {
			selectTab(el, i) {
				this.tabSel = i;

			},
			changeTj() {
				uni.navigateTo({
					url: './changeTj'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.collect {
		color: #333;

		.tab_list_sy {
			display: flex;
			font-size: 36upx;
			justify-content: space-around;
			background-color: #fff;
			border-top: 1upx solid #eee;

			.item {
				border-bottom: 6upx solid transparent;
				padding: 20upx 0 16upx;

				&.active {
					color: $uni-bl;
					border-bottom: 6upx solid $uni-bl;
				}
			}
		}
		.sc2_list{
			padding: 26upx;
			background-color: #f0f0f0;
			min-height: 100vh;
			.item{
				display: flex;
				color: #666;
				margin-bottom: 26upx;
				.img{
					width: 60%;
					height: 220upx;
				}
				.sc2_info{
					display: inline-flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 20upx;
					padding: 10upx 0;
					.isz{
						display: inline-flex;
						justify-content: space-between;
					}
				}
			}
		}
		.coll_body1 {
			background-color: #f0f0f0;

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 26upx;
			min-height: 100vh;
			.item_box {
				width: 340upx;
				background-color: #fff;
				margin-bottom: 20upx;
				height: 570upx;
				.p6_t_img {
					width: 340upx;
					height: 340upx;
				}

				.item_info {
					padding: 10upx 10upx 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.r {
						color: #999;
						text-align: center;
						transform: scale(.9);
						&.orange{
							color: #FFC21C;
							.iconfont{
								color: #FFC21C;
							}
						}
					}
				}

				.money {
					display: flex;

					.text_d {
						color: #999;
						margin-left: 10upx;
						transform: scale(.9);
					}
				}
			}

		}
	}
</style>
