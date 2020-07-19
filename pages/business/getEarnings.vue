<template>
	<view class="my_order_busi">
		<view class="b_item" v-for="i in 5">
			<view class="left">
				<view class="t">
					购买塑贝水乳
				</view>
				<view class="time">
					张大大 13236363636
				</view>
			</view>
			<view class="right">
				<view class="text_r">
					+50
				</view>
				<view class="time">
					2020-056-09 09:00
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
		}
	}
</script>

<style lang="scss" scoped>
.my_order_busi{
	
	.b_item{
		display: flex;
		justify-content: space-between;
		padding:20upx 26upx;
		border-top: 1upx solid #eee;
		align-items: center;
		color: #666;
		font-size: 32upx;
		.time{
			color: #999;
			font-size: 28upx;
			margin-top: 4upx;
			
		}
		.text_r{
			text-align: right;
		}
	}
}
</style>
