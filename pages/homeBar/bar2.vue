<template>
	<view class="home_bar2">
		<view class="select_sy">
			<view class="bdb1 select_title_s">
				<view class="item_bef item" @click="classifyShow" :class="{'item_aft':carXshow}">
					销量
				</view>
				<view class="item_bef item" @click="serveShow" :class="{'item_aft':carSershow}">
					价格
				</view>
			</view>

			<view class="shade_sy" v-show="carXshow">
				<view class="select_box_sy">
					<view class="item_s" v-for="(item,index) in classifyList" :class="{'active':index == classifyS}"
					 @click="classifySe(item,index)">
						{{item.name}}
					</view>
				</view>
				<view class="true_btn">
					<view class="btn" @click="initBtn('销量')">
						重置
					</view>
					<view class="btn blue" @click="subBtn('销量')">
						确定
					</view>
				</view>
			</view>
			<view class="shade_sy" v-show="carSershow">
				<view class="select_box_sy">
					<view class="item_s" v-for="(item,index) in carServeList" :class="{'active':index == carSer}" @click="carSerC(item,index)">
						{{item.name}}
					</view>
				</view>
				<view class="true_btn">
					<view class="btn" @click="initBtn('价格')">
						重置
					</view>
					<view class="btn blue" @click="subBtn('价格')">
						确定
					</view>
				</view>
			</view>
		</view>
		<view class="p6_recommend">
			<view class="p6_body">
				<view class="item_box" v-for="item in p6List" @click="toDetail(item)">
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
</template>

<script>
	export default {
		data() {
			return {
				carXshow: false,
				carSershow: false,
				classifyList: [{name: "全部"},{name: "由高到低"},{name: "由低到高"}],
				carServeList: [{name: "全部"},{name: "由高到低"},{name: "由低到高"}],
				classifyS: -1,
				carSer: -1,
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
				],
				headerTitle:""

			};
		},
		onLoad(ph) {
			console.log(ph.page)
			let phPage = ph.page;
			if(phPage == "bar2"){
				this.headerTitle = "今日上新"
			}else
			if(phPage == "bar3"){
				this.headerTitle = "好物推荐"
			}else
			if(phPage == "bar6"){
				this.headerTitle = "新人必买"
			}
			uni.setNavigationBarTitle({
				title:this.headerTitle
			})
			
		},
		methods: {
			classifyShow() {
				this.carXshow = true
				this.carSershow = false
			},
			serveShow() {
				this.carXshow = false
				this.carSershow = true
			},
			classifySe(item, index) {
				this.classifyS = index;
			},
			carSerC(item, index){
				this.carSer = index;
			},
			initBtn(el){
				this.classifyS = -1;
				this.carSer = -1;
				this.carXshow = false
				this.carSershow = false
			},
			subBtn(el){
				console.log(el)	
				this.carXshow = false
				this.carSershow = false
			},
			toDetail(item){
				uni.navigateTo({
					url:'../goodsDetail/goodsDetail?item='+item
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home_bar2 {
		.p6_recommend {
			padding:calc(44px + env(safe-area-inset-top)) 26upx 26upx 26upx;
			background-color: #f0f0f0;
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
		.select_box_sy {
			padding: 20upx 0;
			background-color: #fff;
			.item_s {
				font-size: 32upx;
				padding: 14upx 0upx 14upx 66upx;
				color: #666;
		
				&.active {
					color: $uni-bl;
				}
			}
			
		}
		.item_bef {
			font-size: 32upx;
			color: #999;
			padding: 16upx 20upx;

			&::after {
				display: inline-block;
				font-family: "iconfont" !important;
				font-size: 24upx;
				font-style: normal;
				content: "\e658";
				margin-left: 8upx;
				transform: scale(.8);
			}
		}

		.item_aft {
			font-size: 32upx;
			color: $uni-bl;
			padding: 16upx 20upx;

			&::after {
				display: inline-block;
				font-family: "iconfont" !important;
				font-size: 24upx;
				font-style: normal;
				content: "\e62d";
				margin-left: 8upx;
				transform: scale(.8);
			}
		}

		.select_sy {
			z-index:10;
			position:fixed;
			top:calc(44px + env(safe-area-inset-top));
			left:0;
			background-color: #fff;
			width: 750upx;
			.true_btn {
				display: flex;
				background-color: #fff;

				.btn {
					width: 50%;
					text-align: center;
					padding: 32upx 0;
					border-top: 1upx solid #eee;
					border-bottom: 1upx solid #eee;

					&.blue {
						background-color: $uni-bl;
						border-top: 1upx solid $uni-bl;
						border-bottom: 1upx solid $uni-bl;
						color: #fff;
					}
				}
			}

			.select_title_s {
				display: flex;
				align-items: center;
				.item {
					width: 50%;
					text-align: center;
				}
			}
		}

		.shade_sy {
			position: absolute;
			top: 65upx;
			left: 0;
			width: 100%;
			background-color: rgba(0, 0, 0, .5);
			height: 86vh;
		}
	}
</style>
