<template>
	<view class="school">
		<view class="s_t_img">
			<image src="../../static/img/school/sbanner.png" mode="widthFix" class="img"></image>
		</view>
		<view class="s_bar">
			<view class="item" v-for="item in schoolBar" @click="nativeBar(item.url)">
				<image :src="'../../static/img/school/'+item.img" mode="widthFix" class="img"></image>
				<view class="text">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="sc_body">
			<view class="s_title">
				精选课程
			</view>
			<view class="s_t1_list">
				<view class="item" v-for="item in 4" @click="cDetali">
					<image src="../../static/img/home/kc1.png" class="img"></image>
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
					</view>

				</view>
			</view>
		</view>
		<view class="sc2_body">
			<view class="s_title">
				推荐课程
			</view>
			<view class="sc2_list">
				<view class="item" v-for="item in 4" @click="cDetali('item')">
					<image src="../../static/img/tuij1.png" class="img"></image>
					<view class="sc2_info">
						<view class="">
						每日投资小课堂分享投资
						经验
						</view>
						<view class="isz">
							<view class="red">
								免费
							</view>
							<view class="name">
								张云鹏
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="query_more">
			加载更多
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schoolBar: [{
						img: "xianxkc.png",
						text: "线下课程",
						url: "bar1"
					},
					{
						img: "qiyjt.png",
						text: "美肤知识",
						url: "bar2"
					},
					{
						img: "mianfkc.png",
						text: "免费课程",
						url: "bar3"
					},
					{
						img: "zhaoskc.png",
						text: "企业讲堂",
						url: "bar4"
					}
				]
			};
		},
		methods:{
			nativeBar(url){
				if(url == "bar1" || url == "bar2"){
					uni.navigateTo({
						url:"./schoolBar1"
					})
				}
				if(url == "bar3" || url == "bar4"){
					uni.navigateTo({
						url:"./schoolBar3"
					})
				}
			},
			cDetali(el){
				if(el == 'item'){
					uni.navigateTo({
						url:"./scBar3Detail?item="+el
					})
				}else{
					uni.navigateTo({
						url:"./scBar3Detail"
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.school {
		background-color: #f0f0f0;
		color: #333;
		.s_t_img {
			background-color: #fff;
			padding: 26upx;

			.img {
				width: 100%;
			}
		}

		.s_bar {
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			padding: 0 26upx 30upx;
			
			.item {
				width: 150upx;
				text-align: center;
				color: #666;
				.img {
					width: 50%;
				}
			}
		}
		.query_more{
			color: #999;
			text-align: center;
			padding: 40upx 0 100upx;
		}
		.sc2_body {
			padding: 26upx 26upx;
			background-color: #fff;

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
			.sc2_list{
				padding: 26upx 0;
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
						.isz{
							display: inline-flex;
							justify-content: space-between;
						}
					}
				}
			}
		}

		.sc_body {

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
