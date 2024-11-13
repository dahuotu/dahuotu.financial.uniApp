 <template>
 	<view class="container">
 		<view class="input-group">
 			<label for="principal">本金</label>
 			<input type="text" v-model="principal" placeholder="请输入本金" @input="validateInput('principal')" />
 			<text v-if="errors.principal" class="error">请输入有效的本金金额</text>
 		</view>
 		<view class="input-group">
 			<label for="openingPrice">开盘价</label>
 			<input type="text" v-model="openingPrice" placeholder="请输入开盘价" @input="validateInput('openingPrice')" />
 			<text v-if="errors.openingPrice" class="error">请输入有效的开盘价</text>
 		</view>
 	</view>

 	<view class="container">
 		<view class="header">买入价格计算</view>
 		<view class="input-group">
 			<label for="buyType">买入类型</label>
 			<picker mode="selector" :range="buyTypes" @change="updateBuyType">
 				<view class="picker">{{ buyTypes[buyTypeIndex] }}</view>
 			</picker>
 		</view>
 		<view class="input-group">
 			<label>{{ rateLabel }}</label>
 			<input type="text" v-model="rate" placeholder="请输入涨幅率" @input="validateInput('rate')" />
 			<text v-if="errors.rate" class="error">请输入有效的百分比</text>
 		</view>
 		<view class="input-group">
 			<label>买入价格</label>
 			<input type="text" :value="buyPrice" readonly @click="copyToClipboard(buyPrice)" />
 		</view>
 		<view class="input-group">
 			<label>可买数量</label>
 			<input type="text" :value="buyQuantity" disabled />
 		</view>
 		<view class="input-group">
 			<label>买入手续费</label>
 			<input type="text" :value="buyFee" disabled />
 		</view>
 		<view class="input-group">
 			<label>实际数量</label>
 			<input type="text" :value="realQuantity" disabled />
 		</view>
 	</view>

 	<view class="container">
 		<view class="header">卖出价格计算</view>
 		<view class="input-group">
 			<label for="buyType">卖出类型</label>
 			<picker mode="selector" :range="sellTypes" @change="updateSellType">
 				<view class="picker">{{ sellTypes[sellTypeIndex] }}</view>
 			</picker>
 		</view>
 		<view class="input-group">
 			<label>{{ sellRateLabel }}</label>
 			<input type="text" v-model="sellRate" placeholder="请输入涨幅率" @input="validateInput('sellRate')" />
 			<text v-if="errors.sellRate" class="error">请输入有效的百分比</text>
 		</view>
 		<view class="input-group">
 			<label>卖出价格</label>
 			<input type="text" :value="sellPrice" readonly @click="copyToClipboard(sellPrice)" />
 		</view>
 		<view class="input-group">
 			<label>卖出手续费</label>
 			<input type="text" :value="sellFee" disabled />
 		</view>
 		<view class="result">
 			<text>最终收入：{{ finalPrincipal.toFixed(18) }}</text>
 			<text>最终收益：{{ finalProfit.toFixed(18) }}</text>
 			<text>盈利率：{{ profitRate.toFixed(4) }}%</text>
 		</view>
 	</view>
 </template>

 <style scoped>
 	.container {
 		margin: 30rpx;
 		padding: 30rpx;
 		border-radius: 16rpx;
 		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 		background: #000;
 	}

 	.input-group {
 		margin-bottom: 30rpx;
 	}

 	label {
 		display: block;
 		margin-bottom: 30rpx;
 		font-weight: bold;
 		color: #717174;
 	}

 	input {
 		width: 100%;
 		height: 70rpx;
 		line-height: 70rpx;
 		padding: 0 16rpx;
 		box-sizing: border-box;
 		border: 1rpx solid #717174;
 		border-radius: 8rpx;
 		color: #717174;
 		font-size: 28rpx;
 	}

 	.picker {
 		width: 100%;
 		padding: 16rpx;
 		box-sizing: border-box;
 		border: 1rpx solid #717174;
 		border-radius: 8rpx;
 		color: #717174;
 		font-size: 28rpx;
 	}

 	.header {
 		font-size: 32rpx;
 		text-align: center;
 		color: #fff;
 		font-weight: bold;
 		margin-bottom: 30rpx;
 	}

 	.error {
 		color: red;
 		font-size: 28rpx;
 		margin-top: 30rpx;
 	}

 	.result {
 		margin-top: 30rpx;
 	}

 	.result text {
 		color: #fff;
 		font-size: 32rpx;
 		display: block;
 		margin-bottom: 30rpx;
 	}
 </style>

 <script>
 	import Decimal from 'decimal.js';
 	export default {
 		data() {
 			return {
 				principal: 5000,
 				openingPrice: '',
 				buyTypes: ['跌幅买入', '涨幅买入'],
 				buyTypeIndex: 0,
 				rate: 1.50,
 				sellRate: 1.50,
 				buyPrice: 0,
 				buyQuantity: 0,
 				realQuantity: 0,
 				buyFee: 0,
 				sellTypes: ['涨幅卖出', '跌幅卖出'],
 				sellTypeIndex: 0,
 				sellPrice: 0,
 				sellFee: 0,
 				finalPrincipal: 0,
 				finalProfit: 0,
 				profitRate: 0.00,
 				errors: {
 					principal: false,
 					openingPrice: false,
 					rate: false,
 					sellRate: false
 				}
 			};
 		},
 		computed: {
 			rateLabel() {
 				return this.buyTypeIndex === 1 ? '涨幅买入率 (%)' : '跌幅买入率 (%)';
 			},
 			sellRateLabel() {
 				return this.sellTypeIndex === 0 ? '涨幅卖出率 (%)' : '跌幅卖出率 (%)';
 			},
 		},
 		methods: {
 			updateBuyType(e) {
 				// 更新买入类型索引
 				this.buyTypeIndex = e.detail.value;
 				// 更新计算
 				this.calculatePrices();
 			},
 			updateSellType(e) {
 				// 更新买入类型索引
 				this.sellTypeIndex = e.detail.value;
 				// 更新计算
 				this.calculatePrices();
 			},
 			validateInput(field) {
 				const value = parseFloat(this[field]);
 				this.errors[field] = isNaN(value) || value <= 0;
 				if (!this.errors[field]) this.calculatePrices();
 			},
 			copyToClipboard(value) {
 				// 检查是否支持 clipboard API
 				if (navigator.clipboard) {
 					navigator.clipboard.writeText(value.toString()).then(() => {
 						uni.showToast({
 							title: '已复制到剪贴板',
 							icon: 'success'
 						});
 					}).catch((error) => {
 						console.error("复制失败:", error);
 						uni.showToast({
 							title: '复制失败',
 							icon: 'none'
 						});
 					});
 				} else {
 					// 如果 clipboard API 不支持，可以使用回退方案
 					const input = document.createElement('input');
 					input.value = value.toString();
 					document.body.appendChild(input);
 					input.select();
 					document.execCommand('copy');
 					document.body.removeChild(input);
 					uni.showToast({
 						title: '已复制到剪贴板',
 						icon: 'success'
 					});
 				}
 			},
 			limitPrecision(value, precision = 10) {
 				return value.toFixed(precision);
 			},
 			calculatePrices() {
 				const principal = parseFloat(this.principal);
 				const openingPrice = this.limitPrecision(parseFloat(this.openingPrice));
 				const rate = parseFloat(this.rate).toFixed(2);
 				const sellRate = parseFloat(this.sellRate).toFixed(2);
 				if (isNaN(principal) || isNaN(openingPrice) || isNaN(rate) || isNaN(sellRate)) return;

 				const _buyPrice = this.buyTypeIndex === 1 ?
 					openingPrice * (1 + (rate / 100)) :
 					openingPrice * (1 - (rate / 100));
 				this.buyPrice = this.limitPrecision(_buyPrice);
 				this.buyQuantity = (principal / this.buyPrice).toFixed(0);
 				this.buyFee = (((0.08 / 100) * this.buyQuantity) * this.buyPrice).toFixed(10);
 				this.realQuantity = Math.round(this.buyQuantity - ((0.08 / 100) * this.buyQuantity));

 				const _sellPrice = this.sellTypeIndex === 0 ?
 					openingPrice * (1 + (sellRate / 100)) :
 					openingPrice * (1 - (sellRate / 100));
 				this.sellPrice = this.limitPrecision(_sellPrice);

 				this.calculateResults(principal, this.sellPrice, this.realQuantity);
 			},
 			calculateResults(principal, sellPrice, realQuantity) {
 				const sellPrincipal = sellPrice * realQuantity;
 				this.sellFee = sellPrincipal * (0.08 / 100);
 				this.finalPrincipal = sellPrincipal - this.sellFee;
 				this.finalProfit = this.finalPrincipal - principal;
 				this.profitRate = this.finalProfit / principal * 100;
 			}
 		},
 		mounted() {
 			this.calculatePrices();
 		}
 	};
 </script>