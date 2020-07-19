<template>
	<view class="haibao">
		<view class="show_img">
			<image src="../../static/img/yqhb1.png" mode="widthFix" class="img"></image>
		</view>
		<view class="img_list">
			<view class="item" v-for="item in imgList">
				<image :src="'../../static/img/'+item.img" mode="widthFix" class="img"></image>
			</view>
		</view>
		<view class="hb_btn">
			<button class="btn blue">分享给微信好友</button>
			<button class="btn orange">保存到相册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					{img:"yqhb1.png"},
					{img:"yqhb4.png"},
					{img:"yqhb1.png"},
					{img:"yqhb4.png"},
					{img:"yqhb1.png"}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.haibao{
	.hb_btn{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		.btn{
			flex:1;
			padding: 30upx 0;
			border-radius: 0;
			font-size: 36upx;
		}
	}
	.show_img{
		text-align: center;
		.img{
			width: 460upx;
		}
	}
	.img_list{
		display: flex;
		padding: 26upx 0 26upx 26upx;
		.item{
			width: 130upx;
			
			margin-right: 20upx;
			.img{
				width: 100%;
				height: 230upx;
			}
		}
	}
}
</style>
