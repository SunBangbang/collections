<template>
	<div class="collection-page">
		<van-nav-bar title="藏品" :border="false" />
		<div class="tabs">
			<van-tabs v-model:active="active" line-height="0" background="rgba(0,0,0,0.0)" title-active-color="#F3E1BD"
				title-inactive-color="#9090A0">
				<van-tab title="藏品"></van-tab>
				<van-tab title="宝盒"></van-tab>
			</van-tabs>
		</div>
		<div id="tab">
			<div class="tab-tit">
				<!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
				<a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}">收藏中</a>
				<a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">转售中</a>
				<a href="javascript:;" @click="curId=2" :class="{'cur':curId===2}">已转售</a>
			</div>
			<div class="tab-con">
				<!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->
				<div v-show="curId===0">
					<img src="@/assets/collction/null.png" alt="">
				</div>
				<div v-show="curId===1">
					<img src="@/assets/collction/null.png" alt="">
				</div>
				<div v-show="curId===2">
					<img src="@/assets/collction/null.png" alt="">
				</div>
			</div>
		</div>
		<onTabbar :active="active"></onTabbar>
	</div>
</template>

<script>
	import onTabbar from '@/components/tabbar.vue'
	export default {
		name: 'onCollection',
		data() {
			return {
				active: 1,
				curId: 0,
			}
		},
		components: {
			onTabbar
		},
		methods: {

		}
	}
</script>

<style>
	#app .collection-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .collection-page .van-nav-bar__title {
		color: #fff;
	}

	#app .collection-page .van-notice-bar {
		background: rgba(75, 88, 127, 0.2);
		color: #fff;
		border-radius: 5px;
	}

	#app .collection-page .van-tab {
		width: 50px;
		flex: none;
		font-size: 16px;
	}

	#app .collection-page .van-tab--active {
		font-size: 18px;
	}
</style>
<style scoped lang="less">
	.collection-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.tabs {
			margin: 0 20px;
		}

		#tab {
			width: 100%;
			margin: 0 auto;
			padding: 15px 25px;

			.tab-tit {
				font-size: 0;
				width: 100%;

				a {
					display: inline-block;
					font-size: 14px;
					text-align: center;
					color: #9090A0;
					background-color: rgba(255, 255, 255, 0.1);
					text-decoration: none;
					margin-right: 10px;
					padding: 8px;
					border-radius: 10px;
				}

				.cur {
					background: #F3E1BD;
					color: #333333;
				}
			}

			.tab-con div {
				padding-top: 200px;
				text-align: center;
				img{
					width: 200px;
					height: 160px;
				}
			}
		}
	}
</style>
