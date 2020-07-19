<template>
	<view class="set">
		<uni-list>
			<uni-list-item title="修改手机号" @click="nativeTo('edit')"></uni-list-item>
			<uni-list-item title="微信号" rightText="未绑定微信号" @click="nativeTo('wx')"></uni-list-item>
			<uni-list-item title="用户协议" rightText=""></uni-list-item>
			<uni-list-item title="版本更新" rightText="V1.01" :showArrow="false"></uni-list-item>
		</uni-list>
		<view style="height:220upx"> </view>
		<view class="msg_btn">
			<button class="btn" @click="quit">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onBackPress() {
			uni.switchTab({
				url:'./mine'
			})
			return true;
		},
		methods:{
			quit(){
				
			},
			nativeTo(url){
				if(url == 'edit'){
					uni.navigateTo({
						url:"../login/editPhone"
					})
				}else
				if(url == 'wx'){
					uni.navigateTo({
						url:"../login/bindVx"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.set{
	background-color: #f0f0f0;
	height: 100vh;
	.msg_btn{
		.btn{
			padding: 35upx 0;
			background-color: #fff;
			font-size: 34upx;
			color: #666;
		}
	}
}
</style>
