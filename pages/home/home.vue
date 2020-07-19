<template>
	<view class="home">
		<view class="header">
			<view class="header_p1">
				<image src="../../static/img/home/logo.png" class="logo"></image>
				<view class="h_title">
					<view class="t">
						香港塑贝官方旗舰商城
					</view>
					<view class="t2">
						<view class="l">香港塑贝</view>
						150W+粉丝关注
					</view>
				</view>
			</view>
			<view class="p_banner">
				<image src="../../static/img/home/banner.png" class="banner"></image>
			</view>
		</view>
		<view class="h_bar">
			<view class="item" v-for="item in hBarList" @click="nativeBar(item.url)">
				<image :src="'../../static/img/home/'+item.icon" class="img"></image>
				<view class="text">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="p3_bg_img" @click="nativeBar('bar3')">
			<image src="../../static/img/home/xct.png" mode="widthFix"></image>
		</view>
		<view class="home_body">
			<view class="title_sy">
				<view class="left">
					会员礼包
				</view>
				<view class="right">
					<text>查看更多</text><text class="iconfont iconjiantou"></text>
				</view>
			</view>
			<scroll-view scroll-x="true" class="p4_scroll_img" scroll-left="0">
				<view class="item" v-for="i in 4" @click="nativeBar('bar5')">
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
			</scroll-view>
			<view class="p5_activity">
				<view class="img_box">
					<image src="../../static/img/jxhd.png" mode="widthFix" class="img"></image>
				</view>

				<view class="item_box" v-for="item in p5List">
					<view class="t_img" @click="nativeBar('bar3')">
						<image :src="'../../static/img/home/'+item.img" class="img"></image>
					</view>
					<scroll-view scroll-x="true" class="goods_item" scroll-left="20">
						<view class="item_child" v-for="citem in item.child" @click="nativeBar('detail')">
							<view class="x_img">
								<image :src="'../../static/img/home/'+citem.simgL" class="ximg"></image>
							</view>
							<view class="t">{{citem.title}}</view>
							<view class="red">￥{{citem.money}}</view>
							<view class="text_d">￥{{citem.oldM}}</view>
						</view>
					</scroll-view>
				</view>


			</view>
			<view class="p6_recommend">
				<view class="img_box">
					<image src="../../static/img/wntj.png" mode="widthFix" class="img"></image>
				</view>
				<view class="p6_body">
					<view class="item_box" v-for="item in p6List" @click="nativeBar('detail')">
						<image :src="'../../static/img/home/'+item.img" class="p6_t_img"></image>
						<view class="item_info">
							<view class="text">
								{{item.text}}
							</view>
							<view class="info">
								<view class="blue">剩余{{item.last}}件</view>
								<view class="r">已售{{item.over}}件</view>
							</view>
							<view class="money">
								<view class="m1">￥{{item.m1}}</view>
								<view class="text_d">￥{{item.om}}</view>
							</view>
						</view>

					</view>
				</view>
				<view class="btm_more">
					加载更多
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barBottom:[
					{}
				],
				hBarList: [{
						icon: "icon1.png",
						text: "塑贝介绍",
						url: "bar1"
					},
					{
						icon: "icon2.png",
						text: "今日上新",
						url: "bar2"
					},
					{
						icon: "icon3.png",
						text: "好物推荐",
						url: "bar3"
					},
					{
						icon: "icon4.png",
						text: "限时秒杀 ",
						url: "bar4"
					},
					{
						icon: "icon5.png",
						text: "会员尊享",
						url: "bar5"
					},
					{
						icon: "icon6.png",
						text: "新人必买",
						url: "bar6"
					},
					{
						icon: "icon7.png",
						text: "创业大学生",
						url: "bar7"
					},
					{
						icon: "icon8.png",
						text: "商学院",
						url: "bar8"
					}
				],
				p5List: [{
					img: "dt1.png",
					child: [{
							simgL: "xt1.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt2.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt3.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt4.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						}
					]
				}, {
					img: "dt2.png",
					child: [{
							simgL: "xt1.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt2.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt3.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt4.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						}
					]
				}, {
					img: "dt3.png",
					child: [{
							simgL: "xt1.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt2.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt3.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						},
						{
							simgL: "xt4.png",
							title: "璀璨奢华套装",
							money: "260.00",
							oldM: "290.00"
						}
					]
				}],
				p6List: [{
						img: "spt1.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00"
					},
					{
						img: "spt2.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00"
					},
					{
						img: "spt3.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00"
					},
					{
						img: "spt4.png",
						text: "香港塑贝宝石美白护肤后保湿水分霜",
						last: 3,
						over: 22,
						m1: "160.00",
						om: "568.00"
					}
				]
			};
		},
		methods:{
			nativeBar(url){
				if(url == "bar1" || url == "bar4"){
					uni.navigateTo({
						url:"../homeBar/"+url
					})
				}else
				if(url == "bar2" || url == "bar3" || url == "bar6"){
					uni.navigateTo({
						url:"../homeBar/bar2?page="+url
					})
				}else
				if(url == "bar5"){
					uni.switchTab({
						url:"../member/member"
					})
				}else
				if(url == "bar7"){
					uni.navigateTo({
						url:"../createC/createC"
					})
				}else
				if(url == "bar8"){
					uni.navigateTo({
						url:"../school/school"
					})
				}else
				if(url == "detail"){
					uni.navigateTo({
						url:"../goodsDetail/goodsDetail"
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		background-color: #F7F7F7;
		.p6_recommend {
			.img_box {
				padding: 30upx 200upx 10upx;

				.img {
					width: 100%;
				}
			}

			.p6_body {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item_box {
					width: 340upx;
					background-color: #fff;
					margin-bottom: 20upx;
					.p6_t_img {
						width: 340upx;
						height: 340upx;
					}
					.item_info{
						padding: 10upx 10upx 30upx;
					}
					.info {
						display: flex;
						justify-content: space-between;

						.r {
							color: #999;
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

		.p5_activity {
			.img_box {
				padding: 30upx 200upx 10upx;

				.img {
					width: 100%;
				}
			}

			.item_box {
				background-color: #fff;
				margin-bottom: 26upx;

				.t_img {
					.img {
						width: 698upx;
						height: 330upx;
					}
				}

				.goods_item {
					white-space: nowrap;
					padding: 10upx;
					width: 100%;
					box-sizing: border-box;
					.item_child {
						width: 180upx;
						margin-right: 16upx;
						display: inline-block;

						.text_d {
							transform: scale(.9);
						}

						.x_img {
							text-align: center;

							.ximg {
								width: 150upx;
								height: 150upx;
							}
						}
					}
				}
			}
		}

		.p4_scroll_img {
			padding: 26upx 0;
			width: 100%;
			box-sizing: border-box;
			white-space: nowrap;
			
			.item {
				width: 560upx;
				background-color: #fff;
				padding: 10upx;
				display: inline-block;
				margin-right: 20upx;

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
							padding: 8upx 22upx;
							transform: scale(.9);
						}
					}
				}

				.t_t {
					padding: 10upx 0 6upx;
					color: #333;
				}

				.imgs {
					display: flex;
					justify-content: space-between;

					.img {
						width: 275upx;
						height: 275upx;
					}
				}
			}
		}

		.home_body {
			padding: 0 26upx;

			.title_sy {
				display: flex;
				justify-content: space-between;
				color: #666;
				align-items: center;
				padding-top: 20upx;

				.left {
					font-weight: bold;
					font-size: 36upx;

					&::before {
						content: "";
						width: 7upx;
						height: 32upx;
						background-color: $uni-bl;
						display: inline-block;
						margin-right: 12upx;
						position: relative;
						top: 1px;
					}
				}

				.right {
					display: inline-flex;
					align-items: center;
				}
			}
		}

		.p3_bg_img {
			padding-top: 26upx;
			background-color: #F0F0F0;
		}

		.h_bar {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 100upx 10upx 0;

			.item {
				width: 22%;
				text-align: center;
				margin-bottom: 16upx;

				.img {
					width: 100upx;
					height: 100upx;
				}

				.text {
					padding-top: 6upx;
				}
			}
		}

		.header {
			height: 400upx;
			background: url(../../static/img/home/bg.png) no-repeat center center;
			background-size: 100% 100%;
			padding: 0 26upx;

			.p_banner {
				padding-top: 40upx;

				.banner {
					width: 100%;
					height: 300upx;
				}
			}

			.header_p1 {
				display: flex;
				color: #fff;
				padding-top: 40upx;

				.logo {
					width: 100upx;
					height: 100upx;
				}

				.h_title {
					margin-left: 32upx;

					.t {
						font-size: 36upx;
						padding-bottom: 10upx;
						letter-spacing: 6upx
					}

					.t2 {
						display: flex;

						.l {
							padding: 4upx 10upx;
							background-color: #CEAE7D;
							border-radius: 20upx;
							margin-right: 20upx;
						}
					}
				}
			}
		}
	}
</style>
