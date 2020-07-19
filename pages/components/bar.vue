<template>
	<view class="bar_bottom">
		<view class="item" :class="{'active':index == tabBar }" v-for="(item,index) in tabBarList" @click="selectTabBar(index,item.pagePath)">
			<image :src="'../../'+item.iconPath" class="img" v-if="index != tabBar"></image>
			<image :src="'../../'+item.selectedIconPath" class="img" v-if="index == tabBar"></image>
			<view class="text">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"tabBarList": [{
					"pagePath": "/home/home",
					"iconPath": "static/img/bar/syh.png",
					"selectedIconPath": "static/img/bar/syl.png",
					"text": "首页"
				}, {
					"pagePath": "/circleFriends/circleFriends",
					"iconPath": "static/img/bar/fqh.png",
					"selectedIconPath": "static/img/bar/fql.png",
					"text": "发圈"
				}, {
					"pagePath": "/login/login",
					"iconPath": "static/img/bar/icon5.png",
					"selectedIconPath": "static/img/bar/icon5.png",
					"text": "会员尊享"
				}, {
					"pagePath": "/business/business",
					"iconPath": "static/img/bar/ywzxh.png",
					"selectedIconPath": "static/img/bar/ywzxl.png",
					"text": "业务中心"
				}, {
					"pagePath": "/mine/mine",
					"iconPath": "static/img/bar/wdh.png",
					"selectedIconPath": "static/img/bar/wdl.png",
					"text": "我的"
				}]
			};
		},
		computed:{
			tabBar(){
				return this.$store.state.tabBar;
			}
		},
		methods:{
			selectTabBar(index,url){
				this.$store.commit('setTabBar',index);
				console.log('../'+url)
				uni.reLaunch({
					url:'..'+url
				})
			}
		}
	}
</script>

<style lang="scss">
.bar_bottom{
	position: fixed;
	width: 750upx;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	z-index: 99;
	background-color: #fff;
	box-sizing: border-box;
	padding:0upx 20upx 10upx;
	border-top: 1upx solid #eee;
	.item{
		width: 120upx;
		text-align: center;
		position: relative;
		// &:nth-child(3){
		// 	.img{
		// 		width: 90upx;
		// 		height: 90upx;
		// 		position:absolute ;
		// 		top: -36upx;
		// 		left: 50%;
		// 		margin-left: -45upx;
		// 	}
		// 	.text{
		// 		padding-top: 58upx;
		// 	}
		// }
		&.active{
			.text{
				color:#31C5AF ;
			}
		}
		.img{
			width: 50upx;
			height: 50upx;
			position:relative;
			top:10upx;
		}
		.text{
			color: #999;
			font-size: 26upx;
			transform: scale(.8);
		}
	}
}
</style>
