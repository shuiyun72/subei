<template>
	<view class="order">
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="order_body">
			<view class="order_card" v-for="(item,index) in orderList" @click="toDetail(index)">
				<view class="o_title">
					订单编号: 1039452315643612345
				</view>
				<view class="t1">
					<image src="../../static/img/jrsx2.png" class="img"></image>
					<view class="title">
						<view class="tl">
							璀璨奢华焕颜套,重现20岁的自然美
						</view>
						<view class="info_num">
							<view class="money">￥160.00</view>
							<view class="num">
								x 1
							</view>
						</view>
					</view>
				</view>
				<view class="time_money">
					<view class="time">
						下单时间:2019-11-13 16:30
					</view>
					<view class="blue">
						<view class="sf">
							共14件 实付:
						</view>
						160元
					</view>
				</view>
				<view class="handle_btn">
					<!-- 待付款 -->
					<button class="btn blue_n round sm" v-if="tabSel == 0 || tabSel == 4" @click.stop="handleBtn('qxdd',item)">取消订单</button>
					<button class="btn blue round sm" v-if="tabSel == 0 || tabSel == 4" @click.stop="handleBtn('qfk',item)">去付款</button>
					<!-- 待发货 -->
					<button class="btn blue round sm" v-if="tabSel == 1 || tabSel == 4" @click.stop="handleBtn('lxkf',item)">联系客服</button>
					<!-- 待收货 -->
					<button class="btn blue_n round sm" v-if="tabSel == 2 || tabSel == 4" @click.stop="handleBtn('lxkf',item)">联系客服</button>
					<button class="btn blue round sm" v-if="tabSel == 2 || tabSel == 4" @click.stop="handleBtn('qrsh',item)">确认收货</button>
					<!-- 已完成 -->
				</view>

			</view>
		</view>
		<uni-popup type="bottom" ref="orderPay">
			<view class="order_pay_popup">
				<view class="p1 red">￥160.00</view>
				<view class="p2">
					商品购买
				</view>
				<radio-group class="block" @change="RadioChange">
					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/ye.png"></image><text class="margin-left-xs">余额支付<text class="sm_info blue">账户余额800元</text></text>
						</view>
						<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A" class="radio" color="#31C5AF"></radio>
					</view>
				
					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/weixin.png"></image><text class="margin-left-xs">微信支付</text>
						</view>
						<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B" class="radio" color="#31C5AF"></radio>
					</view>
					<view class="cu-form-group_sy">
						<view class="item">
							<image class="pay_img" src="../../static/img/zfb.png"></image><text class="margin-left-xs">支付宝支付</text>
						</view>
						<view>
							<radio :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C" class="radio" color="#31C5AF"></radio>
						</view>
					</view>
				</radio-group>
				<view class="r_btn">
					<button class="btn blue round lg" @click="orderTrue">立即支付</button>
				</view>
				<view class="close iconfont iconguanbi" @click="closePopup"> </view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: 'A',
				tabSel: 1,
				tabList: [{
						text: "待付款",
						type: 0
					}, {
						text: "待发货",
						type: 1
					},
					{
						text: "待收货",
						type: 2
					},
					{
						text: "已完成",
						type: 3
					},
					{
						text: "全部",
						type: 4
					}
				],
				itemList: [],
				orderList:[1,2]
			}
		},
		onLoad(ph) {
			if(ph.tabSel){
				this.tabSel = ph.tabSel
			}
		},
		onBackPress() {
			uni.switchTab({
				url:"../home/home"
			})
		},
		methods: {
			selectTab(el, i) {
				this.tabSel = i;

			},
			handleBtn(el, item) {
				if (el == 'qxdd') {
					uni.showModal({
						title: "取消订单",
						content: "是否确认取消订单",
						confirmColor: "#31C5AF",
						confirmText: "确定",
						cancelText: "取消",
						success: function(res) {

						}
					})
				} else
				if (el == 'qfk') {
					this.$refs.orderPay.open();
				}else
				if(el == 'lxkf'){
					uni.navigateTo({
						url:"../home/callKf"
					})
				}else
				if(el == 'qrsh'){
					uni.showModal({
						title: "确认收货",
						content: "是否确认收货",
						confirmColor: "#31C5AF",
						confirmText: "确定",
						cancelText: "取消",
						success: function(res) {
							uni.navigateTo({
								url:"../home/msg?pageType=goodsDetail&msgShow=3",
							})
						}
					})
				}

			},
			RadioChange(e) {
				this.radio = e.detail.value;
			},
			closePopup(){
				this.$refs.orderPay.close();
			},
			orderTrue(){
				uni.navigateTo({
					url: "../home/msg?pageType=goodsDetail&msgShow=2"
				})
			},
			toDetail(item){
				uni.navigateTo({
					url:"./orderDetail?item="+item+"&tabSel="+this.tabSel
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f0f0f0;
	}
	.order_pay_popup{
		background-color: #fff;
		padding: 40upx 0;
		border-radius: 12upx 12upx 0 0;
		position: relative;
		.close{
			position: absolute;
			right: 20upx;
			top: 20upx;
			font-size: 28upx;
			padding: 10upx;
		}
		.p1{
			font-size: 34upx;
			text-align: center;
		}
		.p2{
			text-align: center;
			padding: 12upx 0 60upx;
		}
		.r_btn{
			padding: 40upx 40upx 30upx;
		}
	}
	.cu-form-group_sy {
		display: flex;
		justify-content: space-between;
		padding: 16upx 26upx;
		background-color: #fff;
		border-top: 1upx solid rgba(0, 0, 0, .1);
		.pay_img {
			width: 44upx;
			height: 44upx;
		}
		.item {
			display: inline-flex;
			align-items: center;
	
			.sm_info {
				transform: scale(.8);
				display: inline-block;
			}
	
			.margin-left-xs {
				margin-left: 10upx;
				font-size: 28upx;
				color: #666;
			}
		}
		.radio {
			transform: scale(.7);
		}
	}
	.order_body {
		background-color: #f0f0f0;
		padding: 26upx;

		.order_card {
			background-color: #fff;
			padding: 10upx 26upx 20upx;
			border-radius: 10upx;
			margin-bottom: 26upx;

			.handle_btn {
				border-top: 1upx solid #eee;
				padding-top: 20upx;
				margin-top: 20upx;

				.btn {
					display: inline-block;
					margin-left: 30upx;
				}

				text-align: right;
			}

			.o_title {
				padding: 6upx 0 20upx;
			}

			.time_money {
				display: flex;
				justify-content: space-between;
				color: #999;

				.sf {
					display: inline-block;
					transform: scale(.8);
				}
			}

			.t1 {
				display: flex;
				border-top: 1upx solid #eee;
				padding: 20upx 0;

				.img {
					width: 160upx;
					height: 160upx;
				}

				.title {
					margin-left: 22upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 6upx 0;

					.info_num {
						display: inline-flex;
						justify-content: space-between;
					}

					.tl {
						padding: 6upx 0;
					}
				}
			}
		}
	}

	.tab_list_sy {
		display: flex;
		font-size: 36upx;
		justify-content: space-around;
		background-color: #fff;
		border-top: 2upx solid #eee;

		.item {
			border-bottom: 6upx solid transparent;
			padding: 20upx 0 16upx;

			&.active {
				color: $uni-bl;
				border-bottom: 6upx solid $uni-bl;
			}
		}
	}
</style>
