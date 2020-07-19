<template>
	<view class="msg_all">
		<view class="t_img">
			<image src="../../static/img/wanc.png" class="img"></image>
		</view>
		<!-- 订单来自商品 -->
		<view v-if="pageType == 'goodsDetail' && msgShow == 0 || msgShow == 1 || msgShow == 2">
			<view class="msg_title">
				商品购买成功
			</view>
			<!-- 自取 -->
			<view v-if="msgShow == 0">
				<view class="msg_info">
					您的商品已购买成功，请在7天内到店自提
				</view>
				<view class="msg_info">
					如不能请提前联系店家，7天后商品将自动确认收货
				</view>
			</view>
			<!-- 快递 -->
			<view v-if="msgShow == 1">
				<view class="msg_info">
					您的商品已购买成功,请注意快递查收
				</view>
			</view>
			<view style="height:120upx">

			</view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="showDetail(1)">查看订单详情</button>
			</view>
		</view>
		<!-- 来自订单切换 -->
		<view v-if="pageType == 'goodsDetail' && msgShow == 3">
			<view class="msg_title">
				商品购买成功
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="showDetail(3)">查看订单详情</button>
			</view>
		</view>
		<!-- 来自会员购买-->
		<view v-if="pageType == 'createC'">
			<view class="msg_title">
				购买成功
			</view>
			<view>
				<view class="msg_info">
					会员已购买成功，会员礼品及线下额外好礼将以
				</view>
				<view class="msg_info">
					您选择的方式赠送给您，请注意查收
				</view>
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="turnHome">返回首页</button>
			</view>
		</view>
		<!-- 来自课程购买-->
		<view v-if="pageType == 'schoolBuy'">
			<view class="msg_title">
				课程购买成功
			</view>
			<view>
				<view class="msg_info">
					课程已购买成功,可在个人中心我的课程中查看
				</view>
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="turnMySchool">进入我的课程</button>
			</view>
		</view>
		<!-- 来自提现-->
		<view v-if="pageType == 'getMoney'">
			<view class="msg_title">
				提现申请提交成功
			</view>
			<view>
				<view class="msg_info">
					审核通过后24小时内到账.若未及时到账
				</view>
				<view class="msg_info">
					请联系线下客服人员
				</view>
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="turnBusiness">返回业务中心</button>
			</view>
		</view>
		<!-- 来自更换推荐人-->
		<view v-if="pageType == 'changeTj'">
			<view class="msg_title">
				推荐人成功
			</view>
			<view>
				<view class="msg_info">
					您的推荐人已更改成功
				</view>
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="turnBusiness">返回业务中心</button>
			</view>
		</view>
		<!-- 来自修改手机号/绑定微信-->
		<view v-if="pageType == 'editPhone' || pageType =='bindVx'">
			<view class="msg_title">
				提交成功
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="turnSet">返回设置</button>
			</view>
		</view>
		<!-- 来自199礼包-->
		<view v-if="pageType == 'vip199'">
			<view class="msg_title">
				大礼包购买成功
			</view>
			<view class="msg_info">
				大礼包已购买成功,会员大礼包将以您选择的方式
			</view>
			<view class="msg_info">
				给您,请注意查收
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="showVip199">查看大礼包</button>
			</view>
		</view>
		<!-- 来自vip购买-->
		<view v-if="pageType == 'buyVip'">
			<view class="msg_title">
				会员购买成功
			</view>
			<view>
				<view class="msg_info">
					会员已购买成功，会员礼品将以您选择的方式
				</view>
				<view class="msg_info">
					赠送给您，请注意查收
				</view>
			</view>
			<view style="height:120upx"> </view>
			<view class="msg_btn">
				<button class="lg btn blue round" @click="toVip">进入会员尊享</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgShow: "",
				pageType:""
			};
		},
		onBackPress() {
			uni.switchTab({
				url:'./home'
			})
			return true;
		},
		onLoad(ph) {
			// pageType   == goodsDetail
			// {msgShow : 0  自取  1:快递 2 去支付 3 确定收货}
			// pageType   == createC
			// 大学生申请
			if(ph.pageType){ 
				if (ph.pageType == 'createC' || ph.pageType == 'schoolBuy') {
					uni.setNavigationBarTitle({
						title: "购买成功"
					})
				} else
				if (ph.pageType == 'goodsDetail') {
					if( ph.msgShow == '0'
						|| ph.msgShow == '1'
						|| ph.msgShow == '2'
					){
						uni.setNavigationBarTitle({
							title: "购买成功"
						})
					}
					if( ph.msgShow == '3'){
						uni.setNavigationBarTitle({
							title: "收货成功"
						})
					}
				}else
				if (ph.pageType == 'getMoney') {
					uni.setNavigationBarTitle({
						title: "提现完成"
					})
				}else
				if (ph.pageType == 'changeTj') {
					uni.setNavigationBarTitle({
						title: "更换成功"
					})
				}else
				if (ph.pageType == 'editPhone' || ph.pageType =='bindVx') {
					uni.setNavigationBarTitle({
						title: "购买成功"
					})
				}else
				if (ph.pageType == 'vip199') {
					uni.setNavigationBarTitle({
						title: "提交成功"
					})
				}else
				if (ph.pageType == 'buyVip') {
					uni.setNavigationBarTitle({
						title: "购买成功"
					})
				}
				this.pageType = ph.pageType
			}
			if(ph.msgShow){
				this.msgShow = ph.msgShow
			}					
		},
		methods:{
			showDetail(el){
				uni.navigateTo({
					url:'../order/order?tabSel='+el
				})
			},
			turnHome(){
				uni.switchTab({
					url:"../home/home"
				})
			},
			turnMySchool(){
				uni.navigateTo({
					url:"../school/myStudy"
				})
			},
			turnBusiness(){
				uni.switchTab({
					url:"../business/business"
				})
			},
			turnSet(){
				uni.navigateTo({
					url:"../mine/set"
				})
			},
			showVip199(){
				uni.navigateTo({
					url:"../mine/myLucky"
				})
			},
			toVip(){
				uni.switchTab({
					url:'../member/member'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.msg_all {
		padding: 26upx;
		color: #666;
		text-align: center;

		.t_img {
			padding: 120upx 0 40upx;
			text-align: center;

			.img {
				width: 140upx;
				height: 140upx;
			}
		}

		.msg_title {
			font-size: 36upx;
			font-weight: bold;
		}

		.msg_info {
			padding: 16upx 0;
		}

		.msg_btn {
			padding: 0 30upx;
		}
	}
</style>
