<template>
	<view class="address">
		<uni-nav-bar color="#333333" background-color="#ffffff" :status-bar="true" left-icon="arrowleft" :title="barTitle"
		 @clickLeft="back" />
		 <view class="adres_body">
		 	<view class="adres_item" v-for="(i,index) in itemList" :key="index" @click="selectAdres(i)">
		 		<view class="t1">
		 			<text class="name">张海静</text>
					<text class="phone">18736536598</text>
		 		</view>
				<view class="t2">
					郑州市高新区升龙又一城D区5号楼2单元9层209室
				</view>
				<view class="can_sel" v-if="pageType == 'mine'">
					<label  @click.stop="changeR(i.name)">
						<radio :value="i.name" name="addr" :checked="i.name == selRadio" color="#31C5AF" class="radio"/><text>默认发货地址</text>
					</label>
					<view class="event_btn">
						<view class="item_click" @click="handleAddrClick('edit')">
							<text class="iconfont iconbianji"></text>
							编辑
						</view>
						<view class="item_click" @click="handleAddrClick('del')">
							<text class="iconfont iconshanchu1"></text>
							删除
						</view>
					</view>
				</view>
		 	</view>
			<view style="height:320upx"> </view>
			<view class="msg_btn" v-if="msgShow == 'ps' || pageType == 'mine'">
				<button class="lg btn blue round" @click="addAdres">新建地址</button>
			</view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList:[{name:'a'},{name:'b'}],
				selRadio:'a',
				pageType:"",
				msgShow:"",
				barTitle:"地址选择",
				
			};
		},
		onLoad(ph) {
			if(ph.pageType){
				this.pageType = ph.pageType
				if(this.pageType == 'goodsDetail'){
					this.barTitle = "地址选择"
				}else
				if(this.pageType == 'mine'){
					this.barTitle = "地址管理"
				}
			}
			if(ph.msgShow){
				this.msgShow = ph.msgShow;
				console.log(ph.msgShow)
				if(ph.msgShow == 'ps'){
					this.barTitle = "地址选择"
				}else
				if(ph.msgShow == 'zq'){
					this.barTitle = "店铺选择"
				}
			}
		},
		methods: {
			back() {
				console.log("ss")
				if(this.pageType == "goodsDetail"){
					// uni.navigateTo({
					// 	url:'../order/orderTrue'
					// })
					uni.navigateBack({
						delta:1
					})
				}else
				if(this.pageType == "mine"){
					uni.switchTab({
						url:"../mine/mine"
					})
				}
			},
			selectAdres(item){
				console.log(item)
				// this.$store.commit('setAdres',item)
				if(this.pageType == "goodsDetail"){
					// uni.navigateTo({
					// 	url:'../order/orderTrue?pageType='+this.pageType
					// })
					uni.navigateBack({
						delta:1
					})
				}
			},
			changeR(el){
				this.selRadio = el;
				console.log(el)
			},
			handleAddrClick(el){
				if(el == 'edit'){
					uni.navigateTo({
						url:"./addAddr?pageType="+this.pageType
					})
				}else
				if(el == 'del'){
					
				}
			},
			addAdres(){
				uni.navigateTo({
					url:"./addAddr?pageType="+this.pageType
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.address{
	background-color: #f0f0f0;
	min-height: calc( 100vh );
	.radio{transform: scale(.7);}
	.adres_body{
		.adres_item{
			background-color: #fff;
			margin-top: 26upx;
			padding: 26upx;
			.can_sel{
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #999;
				padding: 10upx 0 0;
				margin-top: 20upx;
				border-top: 1upx solid #eee;
				.event_btn{
					display: inline-flex;
					.item_click{
						margin-left: 40upx;
						.iconfont{
							margin-right: 10upx;
						}
					}
				}
			}
			
			.t1{
				color: #666;
				margin-bottom: 20upx;
				.name{
					font-size: 32upx;
					margin-right: 30upx;
				}
			}
			.t2{
				color: #999;
			}
		}
		.msg_btn{
			padding: 0 60upx;
		}
	}
}
</style>
