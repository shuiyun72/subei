<template>
	<view class="circle_friends">
		<view class="ci_header">
			<image src="../../static/img/logo.png" class="img"></image>
			<view class="ci_m">
				<view class="title">
					香港塑贝官方旗舰商城
				</view>
				<view class="card">
					<view class="big_s">
						#
					</view>
					<view class="cl">
						香港塑贝
					</view>
					<view class="big_s">
						#
					</view>
				</view>
			</view>
		</view>
		<image src="../../static/img/bbxx1.png" mode="widthFix" class="ci_p1_img"></image>
		<view class="bdt_ci">
			<view class="round_tab_list_sy">
				<view class="item" v-for="(item,index) in roundTab" :class="{'active':index == tabSel}" @click="selTab(index)">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="ci_list">
			<view class="item" v-for="i in 3">
				<view class="ci_header_t">
					<image src="../../static/img/logo.png" class="img"></image>
					<view class="ci_m">
						<view class="title">
							塑贝执行官
						</view>
						<view class="time">
							2020-06-05 08:20
						</view>
					</view>
				</view>
				<view class="ci_info">
					<view class="text_t">
						<text class="red">#香港塑贝# </text>·璀璨奢华焕颜套
					</view>
					<view class="text_t">
						1、富含北美金缕梅璨奢华焕颜套
					</view>
					<view class="text_t">
						2、含有昂贵的美白成分...
					</view>
					<view class="text_t">
						3、维稳效果超级好
					</view>
					<image src="../../static/img/haok1.png" mode="widthFix" class="left_img"></image>
					<view class="handle">
						<view class="left">
							<text class="iconfont icondownload"></text>下载到手机
						</view>
						
						<view class="right">
							<view class="">
								分享到:
							</view>
							<image src="../../static/img/weixin.png"  class="img_sa"></image>
							<image src="../../static/img/pyq3.png"  class="img_sa"></image>
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
				tabSel:0,
				roundTab:[
					{text:"每日好课"},
					{text:"每日好货"},
					{text:"每日海报"}
				]
			};
		},
		methods:{
			selTab(el){
				this.tabSel = el
			}
		}
	}
</script>

<style lang="scss" scoped>
	.round_tab_list_sy{
		display: flex;
		justify-content: space-between;
		background-color: #f0f0f0;
		border-radius: 40upx;
		.item{
			width: 30%;
			box-sizing: border-box;
			padding: 12upx 0;
			border-radius: 40upx;
			text-align: center;
			font-weight: bold;
			color: #666;
			&.active{
				background-color: $uni-bl;
				color: #fff;
			}
		}
	}
.circle_friends{
	padding: 10upx 0;
	.ci_list{
		.item{
			padding: 20upx 0;
			border-bottom: 20upx solid #f0f0f0;
			.ci_info{
				padding: 20upx 26upx 20upx 140upx;
				.text_t{
					color: #666;
				}
				.left_img{
					width: 300upx;
					padding: 20upx 0;
				}
				.handle{
					display: flex;
					justify-content: space-between;
					color: #888;
					.icondownload{
						margin-right: 20upx;
					}
					.right{
						display: inline-flex;
						.img_sa{
							width: 40upx;
							height: 40upx;
							margin-left: 26upx;
						}
					}
				}
			}
			.ci_header_t{
				display: flex;
				padding: 0 26upx;
				.img{
					width:80upx;
					height: 80upx;
				}
				.ci_m{
					margin-left: 26upx;
					.title{
						font-size: 32upx;
						font-weight: bold;
						color: #666;
						margin-bottom: 10upx;
					}
					.time{
						color: #999;
					}
				}
			}
		}
	}
	.bdt_ci{
		padding: 40upx 26upx 20upx;
		border-top: 20upx solid #f0f0f0;
		border-bottom: 1upx solid #f0f0f0;
		
	}
	.ci_header{
		display: flex;
		padding: 0 26upx;
		.img{
			width: 100upx;
			height: 100upx;
		}
		.ci_m{
			margin-left: 26upx;
			.title{
				font-size: 32upx;
				font-weight: bold;
				color: #333;
				margin-bottom: 10upx;
			}
			.card{
				display: flex;
				.big_s{
					font-size: 40upx;
					color: $uni-bl;
				}
				.cl{
					padding: 6upx 26upx;
					color: #fff;
					background-color: $uni-bl;
					border-radius: 26upx;
					transform: scale(.9);
				}
			}
		}
	}
	.ci_p1_img{
		width: 100%;
		height: 240upx;
		padding: 10upx 0 20upx;
	}
}
</style>
