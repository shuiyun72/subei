<template>
	<view class="home_bar1">
		<view class="t_img_c">
			<image src="../../static/img/logo.png" class="img"></image>
		</view>
		<view class="title p1">
			河南塑贝科技有限公司
		</view>
		<view class="b_text">
			河南塑贝生物科技有限公司，是一家集生物研究及生产销售为一体的生物科技公司，产品涵盖护肤、面膜洗护等全品类，奉行：“多元、乐观、创新、奉献”的企业精神。作为中国本土化妆品企业的代表。塑贝始终顺应消费者的需求，提供国际优秀品质的产品体验
		</view>
		<view class="title p2">
			公司资质和证书
		</view>
		<view class="t1_img_c">
			<image src="../../static/img/zhengs.png" class="img"></image>
		</view>
		<view class="title">
			公司官网
		</view>
		<view class="t_text">
			官网地址：www.subei.com
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
.home_bar1{
	letter-spacing: 6upx;
	.title{
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
		color: #333;
		
	}
	.b_text{
		line-height: 56upx;
		padding: 26upx;
		
	}
	.t_text{
		text-align: center;
		padding: 10upx 0 70upx;
	}
	.t_img_c{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 0;
		.img{
			width: 200upx;
			height: 200upx;
		}
	}
	.t1_img_c{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 0;
		.img{
			width: 730upx;
			height: 600upx;
		}
	}
	
}
</style>
