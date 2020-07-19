<template>
	<view class="add_addr">
		<uni-list>
			<uni-list-item title="联系人" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="fromSub.name" placeholder="联系人姓名"/>
				</template>
			</uni-list-item>
			<uni-list-item title="联系电话" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="fromSub.phone" placeholder="联系人电话"/>
				</template>
			</uni-list-item>
			<uni-list-item title="所在地区" :showArrow="false">
				<template v-slot:right="">
					<view class="right_sel">
						请选择地区<text class="iconfont iconjiantou"></text>
					</view>
				</template>
			</uni-list-item>
			<view class="detail_addr">
				<textarea v-model="fromSub.detail" placeholder="详细地址:如道路 门牌号 小区 楼栋号 单元室等" class="textarea"/>
			</view>
		</uni-list>
		<view style="height:220upx"> </view>
		<view class="msg_btn">
			<button class="lg btn blue round" @click="addAdres">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageType:"",
				fromSub:{
					name:"",
					phone:"",
					address:"",
					detail:""
				}
			};
		},
		onLoad(ph){
			if(ph.pageType){
				this.pageType = ph.pageType;
			}
		},
		methods:{
			addAdres(){
				uni.navigateTo({
					url:'./address?pageType='+this.pageType
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.add_addr{
	background-color: #f0f0f0;
	height: 100vh;
	.right_sel{
		color: #666;
	}
	input{
		text-align: right;
		padding: 0 26upx;
	}
	.textarea{
		font-size: 28upx;
		padding: 26upx;
		height: 140upx;
	}
	.msg_btn{
		padding: 0 60upx;
	}
}
</style>
