<template>
	<view class="order_detail">
		<!-- 配货方式 -->
		<view class="l_title_d pdf">
			<view class="l">
				配送方式
			</view>
			<view class="r">
				上门自取
			</view>
		</view>
		<view class="part1 pdf">
			<image src="../../static/img/diaod.png" class="p1_img"></image>
			<view class="info">
				<view class="n">
					400-990-0897
				</view>
				<view class="">
					郑州中原区广告产业园209号
				</view>
			</view>
		</view>
		<view class="l_title_d pdf">
			<view class="l">
				提货人
			</view>
			<view class="r">
				张大大
			</view>
		</view>
		<view class="l_title_d pdf">
			<view class="l">
				提货人电话
			</view>
			<view class="r">
				18236363636
			</view>
		</view>
		<view class="pdf20"></view>
		<!-- 订单编号 -->
		<view class="part2">
			<view class="bg_top pdf">
				订单编号: 102936542589997792153
			</view>
			<view class="bd pdf">
				<image src="../../static/img/jrsx2.png" class="p2_img"></image>
				<view class="info">
					<view class="t">
						香港塑贝欢颜套盒水乳保湿润肤套盒装
					</view>
					<view class="money">
						<view class="red">
							￥<text class="m">160.00</text>
						</view>
						<view class="num">
							x 1
						</view>
					</view>
				</view>
			</view>
			<view class="blue sf">
				共1份 实付: {{tabSel==0 ? '- -' : '160元'}}
			</view>
		</view>
		<view class="pdf20"></view>
		<!-- 订单明细 -->
		<view class="l_title_d pdf">
			<view class="l">
				订单明细
			</view>
		</view>
		<view class="part3">
			<view class="l_title_m pdf">
				<view class="l">
					订单总价:
				</view>
				<view class="r">
					160元
				</view>
			</view>
			<view class="l_title_m pdf">
				<view class="l">
					数量:
				</view>
				<view class="r">
					1个
				</view>
			</view>
			<view class="l_title_m pdf">
				<view class="l">
					实付金额:
				</view>
				<view class="r">
					{{tabSel==0 ? '- -' : '160元'}}
				</view>
			</view>
		</view>
		<view class="pdf20"></view>
		<!-- 订单信息 -->
		<view class="l_title_d pdf">
			<view class="l">
				订单信息
			</view>
		</view>
		<view class="part4">
			<view class="l_title_m pdf">
				<view class="l">
					订单编号:
				</view>
				<view class="r">
					19116909515467893
				</view>
			</view>
			<view class="l_title_m pdf">
				<view class="l">
					下单时间:
				</view>
				<view class="r">
					2019-12-02 14:30
				</view>
			</view>
			<view class="l_title_m pdf">
				<view class="l">
					支付方式:
				</view>
				<view class="r">
					{{tabSel==0 ? '- -' : '微信支付'}}
				</view>
			</view>
			<view class="l_title_m pdf" v-if="tabSel==3">
				<view class="l">
					完成时间:
				</view>
				<view class="r">
					2019-12-06 16:09
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabSel:""
			};
		},
		onLoad(ph) {
			if(ph.tabSel){
				this.tabSel = ph.tabSel;
			}
		}
	}
</script>

<style lang="scss">
.order_detail{
	color: #555;
	border-bottom: 140upx solid #f0f0f0;
	.pdf20{
		height: 20upx;
		background-color: #f0f0f0;
	}
	.part2{
		
		.bd{
			display: flex;
			.p2_img{
				width: 200upx;
				height: 200upx;
				flex-shrink: 0;
			}
			.info{
				margin-left: 20upx;
				display: inline-flex;
				justify-content: space-between;
				flex-direction: column;
				padding: 10upx 0;
				.money{
					display: inline-flex;
					justify-content: space-between;
					align-items: center;
					.m{
						font-size: 38upx;
					}
				}
			}
		}
		.sf{
			padding: 10upx 40upx 30upx 26upx;
			text-align: right;
		}
	}
	.part1{
		display: flex;
		align-items: center;
		.p1_img{
			width: 60upx;
			height: 60upx;
		}
		.info{
			margin-left: 20upx;
			.n{
				font-size: 34upx;
				margin-bottom: 12upx;
			}
		}
	}
	.pdf{
		padding: 22upx 26upx;
		border-top: 1upx solid #eee;
	}
	.l_title_m{
		display: flex;
		align-items: center;
		.l{
			font-size: 34upx;
			color: #666;
			width: 180upx;
		}
		.r{
			color: #333;
		}
	}
	.l_title_d{
		display: flex;
		
		justify-content: space-between;
		align-items: center;
		
		.l{
			font-size: 36upx;
			font-weight: bold;
			color: #666;
		}
	}
}
</style>
