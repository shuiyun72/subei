<template>
	<view>
		<view class="bar4_body">
			<view class="item" v-for="item in 2" @click="toDetail(item)">
				<image src="../../static/img/jrsx2.png" class="img"></image>
				<view class="info">
					<view class="t1">
						山顶上的山顶上到山顶所说的
					</view>
					<view class="t2">
						<view class="l">
							秒杀价: <text class="money">￥160.00</text>
						</view>
						<view class="time">
							8:00-12:00
						</view>
					</view>
					<view class="t3">
						<view class="left">
							原价￥568.00
						</view>
						<view>
							<button class="btn round blue_n">立即抢购</button>
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
				
			};
		},
		methods:{
			toDetail(item){
				uni.navigateTo({
					url:"../goodsDetail/goodsDetail?item="+item
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.bar4_body{
	padding: 24upx;
	color: #333;
	background-color: #F0F0F0;
	.item{
		background-color: #fff;
		margin-bottom: 26upx;
		border-radius: 10upx;
		.img{
			width: 100%;
			height: 560upx;
		}
		.info{
			padding: 10upx 16upx 16upx;
			.t1{
				font-weight: bold;
			}
			.t2{
				display: flex;
				justify-content: space-between;
				padding: 10upx 0;
				.l{
					color: #f00;
					.money{
						font-size: 32upx;
					}
				}
				.time{
					transform: scale(.9);
				}
			}
			.t3{
				display: flex;
				justify-content: space-between;
				width: 100%;
				.left{
					color: #999;

				}
				.btn{
					display: block;
					padding: 10upx 26upx;
				}
			}
		}
	}
}
</style>
