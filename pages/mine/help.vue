<template>
	<view class="help">
		<view class="card_item" v-for="(item,index) in 2" @click="toDetail(item)">
			<view class="p1">
				<view class="t">
					{{index+1}}.直推会员如何提成?
				</view>
				<view class="date">
					2019-08-06 12:20
				</view>
			</view>
			<view class="te">
				2019-08-07 首次新推会员返现一定的金额,会员后期购买的所有产品你都会有10%的返佣
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
			toDetail(el){
				uni.navigateTo({
					url:'./helpDetail?item='+el
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.help{
	background-color: #f0f0f0;
	min-height: 100vh;
	padding: 26upx;
	color: #666;
	.card_item{
		background-color: #fff;
		padding: 26upx;
		border-radius: 16upx;
		margin-bottom: 26upx;
		.p1{
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			.t{font-size: 36upx;font-weight: bold;}
			.date{
				color: #999;
			}
		}
		.te{
			font-size: 32upx;
			padding: 26upx 0 10upx;
			margin-top: 16upx;
			border-top: 1upx solid #eee;
		}
	}
}
</style>
