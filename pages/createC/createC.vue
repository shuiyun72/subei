<template>
	<view class="create_c">
		<view class="title_c1">
			<view class="t1">
				大学生申请聪猫通标准版登记表
			</view>
			<view class="p1">
				必读：大众创业，万众创新，新一代的年轻人是祖国的未来。帮扶大学生创新创业是我们义不容辞的责任！填写表单，立即申请成为会员零风险创业！线下额外赠送超值好礼！ 请注意一定要先注册和上传姓名页再提交信息，谢谢 （审核将在3个工作日完成）
			</view>
		</view>
		<uni-list class="create_from">
			<uni-list-item-point title="姓名" :showArrow="false" point="true">
				<template v-slot:right="">
					<input type="text" v-model="submitFrom.name" placeholder="请填写真实姓名" class="add_input" />
				</template>
			</uni-list-item-point>
			<uni-list-item-point title="手机号" :showArrow="false" point="true">
				<template v-slot:right="">
					<input type="text" v-model="submitFrom.phone" placeholder="请填写手机号" class="add_input" />
				</template>
			</uni-list-item-point>
			<uni-list-item-point title="性别" :showArrow="false" point="true">
				<template v-slot:right="">
					<radio-group  class="flex_group" @change="radioChange">
						<label v-for="(item,index) in radioList" class="radio_label">
							<radio :value="item.value" :checked="index === current" color="#31C5AF" class="radio"/><text>{{item.name}}</text>
						</label>
					</radio-group>
				</template>
			</uni-list-item-point>
			<uni-list-item-point title="推荐人邀请码" :showArrow="false" point="true">
				<template v-slot:right="">
					<input type="text" v-model="submitFrom.tjryqm" placeholder="客户" class="add_input" />
				</template>
			</uni-list-item-point>
			<uni-list-item-point title="出生日期"  point="true" rightText="请选择出生日期"></uni-list-item-point>
			<uni-list-item-point title="证件编号" :showArrow="false" point="true">
				<template v-slot:right="">
					<input type="text" v-model="submitFrom.zjbm" placeholder="请填写证件编号或学号" class="add_input" />
				</template>
			</uni-list-item-point>
			<uni-list-item-point title="所在地区" rightText="请选择地区" point="true"></uni-list-item-point>
			<textarea v-model="submitFrom.detail" placeholder="请输入详细地址" class="t_textarea"/>
			<uni-list-item-point title="上传学生证" :showArrow="false" point="true" >
				<template v-slot:right="">
					<input type="text" v-model="name" placeholder="照片大小限制在20MB以内、支持jpg、png格式" class="add_input sm" disabled/>
			
				</template>
			</uni-list-item-point>
			<view class="imgList">
				<view class="up_img">
					<image src="../../static/img/sctp.png" mode="widthFix" class="img"></image>
				</view>
			</view>
		</uni-list>
		<view class="sub_btn">
			<button class="btn round blue lg" @click="submitBuy">确认提交</button>
		</view>
		<view class="sub_btn_info">
			创业大学生申请成为会员零风险创业
		</view>
	</view>
</template>

<script>
	import uniListItemPoint from '../../components/uni-list-item-point/uni-list-item-point.vue';
	export default {
		components: {
			uniListItemPoint
		},
		data() {
			return {
				submitFrom:{
					name:"",
					phone:"",
					xb:"",
					tjryqm:908099,
					date:"",
					zjbm:"",
					address:"",
					detail:"",
					imgs:[]
				},
				name: "",
				selRadio:'1',
				current: 0,
				radioList: [{
						value: '1',
						name: '男',
						checked: 'true'
					},
					{
						value: '2',
						name: '女'
						
					},
				]
			};
		},
		methods:{
			radioChange(el){
				console.log(el.detail.value)
				this.current = el.detail.value
			},
			submitBuy(){
				uni.navigateTo({
					url:"../order/orderTrue?pageType=createC"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.create_c {
		background-color: #f0f0f0;
		padding-bottom: 100upx;
		.sub_btn{
			padding: 40upx 50upx 26upx;
		}
		.sub_btn_info{
			text-align: center;
			color: #999;
		}
		.imgList{
			display: flex;
			padding: 26upx;
			.up_img{
				margin-right: 20upx;
				.img{
					height: 120upx;
					width: 120upx;
				}
			}
		}
		.t_textarea{
			font-size: 28upx;
			padding: 26upx;
			height: 160upx;
		}
		.flex_group{
			display: flex;
			.radio_label{
				margin-left: 20upx;
			}
			.radio{
				transform: scale(.6);
			}
			
		}
		.add_input {
			font-size: 26upx;
			text-align: right;
			color: #666;
			width: 100%;
			&.sm{
				transform: scale(.9);
			}
		}
		.title_c1{
			background-color: #fff;
			margin-bottom: 20upx;
			padding: 26upx;
			color: #666;
			.t1{
				font-weight: bold;
				font-size: 32upx;
				text-align: center;
				margin-bottom: 10upx;
			}
			.p1{
				line-height: 50upx;
			}
		}
	}
</style>
