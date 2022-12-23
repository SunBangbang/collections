<template>
	<div>
		<div style="height: 88px;"></div>
		<van-tabbar v-model="index" active-color="#04C5F0" inactive-color="#A6A8B9">
			<van-tabbar-item icon="wap-home-o" @click="gonav('/')">首页</van-tabbar-item>
			<van-tabbar-item icon="send-gift-o" @click="gonav('/collection')">藏品</van-tabbar-item>
			<van-tabbar-item icon="bag-o" @click="gonav('/market')">市场</van-tabbar-item>
			<van-tabbar-item icon="manager-o" @click="gonav('/my')">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'onTabbar',
		props: {
			active:Number
		},
		data() {
			return {
				index:this.active||0
			}
		},
		mounted() {
			console.log(this.active)
		},
		methods: {
			gonav(name) {
				this.$router.push(name)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	#app .van-tabbar-item--active {
		background-color: rgba(0, 0, 0, 0);
	}

	#app .van-tabbar {
		background-color: #1A191C;
	}
</style>
