<template>
	<view class="my_group_t">
		<view class="p1_header">
			<view class="p1">
				<view class="t">
					我的推荐人
				</view>
				<view class="tj" @click="changeTj">
					<text class="iconfont blue icongroup-fill"></text>更换推荐人
				</view>
			</view>
			<view class="p2">
				<image src="../../static/img/toux.png" class="img"></image>
				<view class="name">
					张苏鹏
				</view>
			</view>
			<view class="p3">
				<view class="item">
					<view class="l1">
						<text class="iconfont iconshouji1"></text>
						手机号
					</view>
					<view class="l2">
						191*****8945
					</view>
				</view>
				<view class="item">
					<view class="l1">
						<text class="iconfont iconweixin1 blue"></text>
						微信号
					</view>
					<view class="l2">
						zay78990
					</view>
				</view>
			</view>
		</view>
		<view class="my_group_body">
			<view class="c_pa1">
				<view class="item">
					<view class="num">
						2
					</view>
					<view class="text">
						今日新增成员
					</view>
				</view>
				<view class="item">
					<view class="num">
						22
					</view>
					<view class="text">
						全部成员
					</view>
				</view>
			</view>
			<view class="c_pa2">
				<view class="tab_list_sy">
					<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}{{item.num}}</view>
				</view>
				<view class="people">
					<view class="item" v-for="it in 5">
						<view class="l">
							<image src="../../static/img/cy.png" class="img"></image>
							<view class="phone">
								<view class="p">
									18536363265
								</view>
								<view class="time">
									2020-06-08 18:09
								</view>
							</view>
						</view>
						
						<view class="name" v-if="tabSel == '0'">
							推荐人 : 李欣欣
						</view>
					</view>
				</view>
				<view class="more_btn">
					点击加载更多
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
					text: "潜在成员",
					type: 0,
					num:5
				}, {
					text: "团队成员",
					type: 1,
					num:17
				}],
			};
		},
		methods:{
			selectTab(el, i) {
				this.tabSel = i;
			
			},
			changeTj(){
				uni.navigateTo({
					url:'./changeTj'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
.my_group_t{
	color: #333;
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
	.p1_header{
		padding-bottom: 40upx;
		.p1{
			display: flex;
			padding:10upx 26upx 10upx 290upx;
			justify-content: space-between;
			align-items: center;
			.t{
				font-size: 36upx;
				font-size: bold;
			}
			.tj{
				.icontuandui{
					margin-right: 6upx;
				}
			}
		}
		.p2{
			.img{
				width: 110upx;
				height: 110upx;
			}
			.name{
				font-size: 38upx;
			}
			text-align: center;
			padding: 10upx 0 20upx;
			font-weight: bold;
		}
		.p3{
			display: flex;
			justify-content: space-around;
			.item{
				.iconshouji1{
					font-size: 34upx;
					color: #FFC358;
				}
				.iconfont{
					margin-right: 10upx;
				}
				.l1{
					font-size: 32upx;
					margin-bottom: 12upx;
				}
				.l2{
					color: #999;
				}
			}
		}
	}
	.my_group_body{
		padding: 26upx;
		background-color: #f0f0f0;
		.c_pa1{
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			border-radius: 10upx;
			.item{
				text-align: center;
				padding: 50upx 0;
				.num{
					font-size: 40upx;
				}
				.text{
					font-size: 34upx;
					padding-top: 16upx;
				}
			}
		}
		.c_pa2{
			background-color: #fff;
			.more_btn{
				font-weight: bold;
				text-align: center;
				color: #666;
				padding-bottom: 40upx;
				font-size: 32upx;
				letter-spacing:22upx;
			}
			.people{
				padding: 26upx;
				.item{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 20upx 0;
					&+.item{
						border-top: 1upx solid #eee;
					}
					.img{
						width: 70upx;
						height: 70upx;
					}
					.l{
						display: inline-flex;
						align-items: center;
					}
					.phone{
						margin-left: 20upx;
						.p{
							font-size: 34upx;
						}
						.time{
							color: #999;
						}
					}
					.name{
						font-weight: bold;
						font-size: 34upx;
						color: #666;
					}
				}
			}
		}
	}
}
</style>
