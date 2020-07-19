<template>
	<view class="order_true">
		<!-- 确认订单 -->
		<view class="order_info" v-if="pageType =='goodsDetail'">
			<view class="t1">
				<image src="../../static/img/jrsx2.png" class="img"></image>
				<view class="title">
					<view class="tl">
						璀璨奢华焕颜套,重现20岁的自然美
					</view>
					<view class="red">
						￥160.00
					</view>
				</view>
			</view>
			<view class="t2">
				<view class="left">
					购买数量
				</view>
				<uni-number-box v-model="orderNum" @change="numFor" class="number_box_order" />
			</view>
			<view class="t3">
				共{{orderNum}}件商品 小计￥: <text class="money">160.00</text>
			</view>
		</view>
		<!-- 大学生会员购买 -->
		<view class="vip_buy_money_sy" v-if="pageType =='createC'">
			<view class="centent">
				<view class="money">
					<text class="num">199</text>元
				</view>
				<view>
					支付完成即成为会员赠送会员礼品
				</view>
				<view class="">
					大学生申请成为会员零风险创业
				</view>
			</view>
		</view>
		
		<!-- 199会员礼包 -->
		<view class="vip_buy_money_sy" v-if="pageType =='vip199'">
			<view class="centent">
				<view class="money">
					<text class="num">199</text>元
				</view>
				<view>
					支付完成即获得尊享礼包
				</view>
			</view>
		</view>
		
		<!-- 会员购买 -->
		<view class="vip_buy_money_sy" v-if="pageType =='buyVip'">
			<view class="centent">
				<view class="money">
					<text class="num">199</text>元
				</view>
				<view>
					支付完成即成为会员,赠送会员礼包
				</view>
			</view>
		</view>


		<view class="deliver">
			<view class="t_t1">
				<view class="title">
					<text v-if="isShowLb == true">礼品</text>配送方式
				</view>
				<view class="sm_t">
					<picker @change="quListC" v-model="psType" :range="quList" range-key="name">
						<view class="pick_flex">
							<text class="uni-input">{{psType!= 200?quList[psType].name:'请选择'}}</text>
							<text class="iconfont iconjiantou"></text>
						</view>
					</picker>
				</view>

			</view>
			<view class="t_t_address" @click="selectAddress('ps')" v-if="psType == 1 && !selAdres.name">
				<view class="left">
					<image src="../../static/img/diz.png" class="img_address"></image>
					<view>请选择地址</view>
				</view>
				<view class="iconfont iconjiantou"></view>
			</view>
			<view class="t_t2" v-if="psType == 1 && selAdres.name" @click="selectAddress('ps')">
				<view class="left">
					<image src="../../static/img/diaod.png" class="img"></image>
					<view class="text">
						<view class="">
							<text class="name">张花井</text><text>18723563656</text>
						</view>
						<view class="text2">
							郑州市高新区升龙又一城D区5号楼2单元9层209室
						</view>
					</view>
				</view>
				<view class="iconfont iconjiantou"></view>
			</view>
			<view v-if="psType == 0">
				<view class="t_t2" @click="selectAddress('zq')">
					<view class="left">
						<image src="../../static/img/diaod.png" class="img"></image>
						<view class="text">
							<view class="">
								<text class="name">塑贝郑州店</text><text>400-990-0897</text>
							</view>
							<view class="text2">
								郑州市中原区广告产业园209号
							</view>
						</view>
					</view>
					<view class="iconfont iconjiantou"></view>
				</view>
				<view class="t_t3">
					<view class="t_left">
						* 提货人
					</view>
					<view class="t_right">
						张大大
					</view>
				</view>
				<view class="t_t3">
					<view class="t_left">
						* 提货人电话
					</view>
					<view class="t_right">
						19265365468
					</view>
				</view>
			</view>
		</view>
		<view class="pay_type_sy">
			<view class="title_s">
				支付方式
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
		</view>
		<view class="btm_share_bar">
			<view class="left hj">
				<text v-if="pageType =='goodsDetail'">共{{orderNum}}件</text> 合计:<text class="red">￥ 160.00</text>
			</view>
			<view class="r_btn">
				<button class="btn blue round ms" @click="orderTrue">立即支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				orderNum: 1,
				radio: 'A',
				quList: [{
					name: '到店自提'
				}, {
					name: '物流配送'
				}],
				pageType: "",
				msgShow:""
			};
		},
		computed: {
			...mapState(['selAdres', 'psType']),
			isShowLb(){
				if(this.pageType == 'buyVip'){
					return true
				}else{
					return false
				}
			}
		},
		onLoad(ph) {
			if(ph.pageType){
				if (ph.pageType == 'createC') {
					uni.setNavigationBarTitle({
						title: "会员购买"
					})
					
				} else
				if (ph.pageType == 'goodsDetail') {
					uni.setNavigationBarTitle({
						title: "确认订单"
					})
				}else
				if (ph.pageType == 'vip199') {
					uni.setNavigationBarTitle({
						title: "199会员礼包"
					})
				}else
				if (ph.pageType == 'buyVip') {
					uni.setNavigationBarTitle({
						title: "会员购买"
					})
				}
				this.pageType = ph.pageType
			}
			if(ph.msgShow){
				this.msgShow = ph.msgShow
			}
			
		},
		onBackPress() {
			if(this.pageType == 'goodsDetail'){
				uni.navigateTo({
					url: "../goodsDetail/goodsDetail"
				})
				return true;
			}else{
				uni.navigateTo({
					url: "../goodsDetail/goodsDetail"
				})
				uni.switchTab({
					url:'../home/home'
				})
				return true;
			}
			
			
			
		},
		methods: {
			numFor(num) {
				console.log(num)
				this.orderNum = num;
			},
			RadioChange(e) {
				this.radio = e.detail.value;
			},
			orderTrue() {
				if(this.pageType == 'buyVip'){
					this.$store.commit('setVip',true);
				}
				uni.navigateTo({
					url: "../home/msg?&pageType="+this.pageType+"&msgShow="+this.msgShow
				})	
				
			},
			quListC(e) {
				console.log(e.detail.value)
				console.log(this.psType)
				this.msgShow = e.detail.value
				this.$store.commit('setPsType', e.detail.value)
			},
			selectAddress(el) {
				uni.navigateTo({
					url: '../mine/address?pageType=orderTrue&msgShow=' + el
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vip_buy_money_sy {
		background: #fff url(../../static/img/VIP.png) no-repeat center center;
		background-size: 700upx 360upx;
		height: 440upx;
		display: flex;
		justify-content: center;
		align-items: center;

		.centent {
			text-align: center;
			color: #fff;

			.money {
				font-weight: bold;
				margin-bottom: 20upx;

				.num {
					font-size: 80upx;
					margin-right: 10upx;
				}
			}
		}
	}

	.pay_type_sy {
		background-color: #fff;
		margin-top: 26upx;



		.title_s {
			font-size: 34upx;
			font-weight: bold;
			padding: 20upx 26upx;
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


	}

	.order_true {
		background-color: #f0f0f0;
		padding-bottom: 160upx;
		box-sizing: border-box;
		min-height: 100vh;

		.btm_share_bar {
			width: 750upx;
			display: flex;
			align-items: center;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			padding: 16upx 26upx;
			box-sizing: border-box;
			justify-content: space-between;

			.left {
				text-align: center;

				&.hj {
					font-weight: 36upx;
				}
			}
		}

		.deliver {
			background-color: #fff;
			margin-top: 26upx;

			padding: 0upx 26upx 0;

			.t_t_address {
				display: flex;
				justify-content: space-between;
				padding: 30upx 0 40upx;
				border-top: 1upx solid #eee;
				color: #666;

				.left {
					display: inline-flex;
					align-items: center;

					.img_address {
						width: 50upx;
						height: 50upx;
						margin-right: 20upx;
					}
				}

				.iconjiantou {
					color: #999;
				}
			}

			.t_t1 {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.title {
					font-size: 36upx;
					padding: 26upx 0;
				}

				.sm_t {
					font-size: 28upx;
					color: #999;

					.iconfont {
						font-size: 36upx;
						margin-left: 10upx;
					}
				}
			}

			.t_t2 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20upx 0;
				border-top: 1upx solid #eee;
				margin-top: 10upx;

				.left {
					display: inline-flex;
					align-items: center;

					.img {
						width: 60upx;
						height: 60upx;
					}

					.text {
						margin-left: 20upx;
						color: #777;

						.name {
							color: #000;
							font-size: 32upx;
							margin-right: 30upx;
						}
					}
				}

				.iconfont {
					color: #999;
				}
			}

			.t_t3 {
				display: flex;
				justify-content: space-between;
				border-top: 1upx solid #eee;
				padding: 26upx 0;
				align-items: center;

				.t_right {
					color: #999;
				}
			}
		}

		.order_info {
			padding: 26upx;
			background-color: #fff;

			.t1 {
				display: flex;

				.img {
					width: 160upx;
					height: 160upx;
				}

				.title {
					margin-left: 22upx;

					.tl {
						padding: 6upx 0;
					}
				}
			}

			.t2 {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.number_box_order {
					transform: scale(.7);
					position: relative;
					left: 60upx;
				}
			}

			.t3 {
				text-align: right;
				padding: 16upx 0upx 6upx 0;
				color: #777;
			}
		}
	}
</style>
