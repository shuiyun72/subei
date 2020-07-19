<template>
	<view class="have_detail">
		<view class="have_detail_body">
			<view class="header_have">
				<view class="money">
					2800.00
				</view>
				<view class="text">
					累计收益(元)
				</view>
			</view>
			<view class="c_pa2">
				<view class="tab_list_sy">
					<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
				</view>
				<view class="people">
					<view class="item" v-for="it in 5">
						<view class="l">
							<view class="phone">
								<view class="p" v-if="tabSel == '0'">
									订单返佣
								</view>
								<view class="p" v-if="tabSel == '1'">
									提现申请
								</view>
								<view class="time">
									2020-06-08 18:09
								</view>
							</view>
						</view>
						
						<view class="name" v-if="tabSel == '0'">
							+50.00
						</view>
						<view class="name" v-if="tabSel == '1'">
							-500.00
						</view>
					</view>
				</view>
				<!-- <view class="more_btn">
					点击加载更多
				</view> -->
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
					text: "收入账单",
					type: 0
				}, {
					text: "提现账单",
					type: 1
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
	
.have_detail{
	color: #333;
	.header_have{
		background-color: #fff;
		text-align: center;
		padding: 60upx 0;
		.money{
			font-size: 44upx;
			font-weight: bold;
		}
		.text{
			font-size: 32upx;
			margin-top: 10upx;
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
	.have_detail_body{
		
		background-color: #f0f0f0;
		
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
