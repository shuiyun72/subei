<template>
	<view class="my_study">
		<view class="sc2_list">
			<view class="item" v-for="item in 4" @click="studyDetail">
				<image src="../../static/img/tuij1.png" class="img"></image>
				<view class="sc2_info">
					<view class="">
					每日投资小课堂分享投资
					经验
					</view>
					<view class="isz">
						<view class="red" v-if="pageType=='xrbd'">
							免费
						</view>
						<view class="name" v-else>
							张云鹏
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
				pageType:""
			};
		},
		onLoad(ph) {
			if(ph.pageType){
				if(ph.pageType == 'xrbd'){
					uni.setNavigationBarTitle({
						title: "新人必读"
					})
				}
				this.pageType = ph.pageType;
			}
			
		},
		onBackPress() {
			uni.switchTab({
				url:"../mine/mine"
			})
			return true;
		},
		methods:{
			studyDetail(){
				if(this.pageType == 'xrbd'){
					uni.navigateTo({
						url:"../business/newMan"
					})
				}else{
					uni.navigateTo({
						url:"./scBar3Detail?item={name:ss}"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.my_study{
	.sc2_list{
		padding: 26upx;
		.item{
			display: flex;
			color: #666;
			margin-bottom: 26upx;
			.img{
				width: 60%;
				height: 220upx;
			}
			.sc2_info{
				display: inline-flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 20upx;
				.isz{
					display: inline-flex;
					justify-content: space-between;
				}
			}
		}
	}
}
</style>
