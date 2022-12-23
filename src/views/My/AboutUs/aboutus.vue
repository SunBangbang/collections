<template>
	<div class="aboutus-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="aboutus-html" v-html="info.about"></div>
		<div class="info-text">邮箱 {{info.email}}</div>
		<div class="info-text">电话 {{info.service}}</div>
	</div>
</template>

<script>
	import {
		doAbouts
	} from '@/http/user/index.ts'
	import {turnhtml} from '@/common/public.js'
	export default {
		name: 'onAboutUs',
		data() {
			return {
				title: '关于我们',
				info: {}
			}
		},
		mounted() {
			this.postinfo()
		},
		methods: {
			postinfo() {
				doAbouts().then(res => {
					this.info = res.data
					this.info.about = turnhtml(this.info.about)

				})
			},
			onClickLeft() {
				this.$router.push('/my')
			}
		}
	}
</script>
<style>
	#app .aboutus-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .aboutus-page .van-nav-bar__title {
		color: #fff;
	}

	#app .aboutus-page .van-nav-bar .van-icon {
		color: #fff;
	}
</style>
<style scoped lang="less">
	.aboutus-page {
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;

		.aboutus-html {
			padding: 20px;
			color: #fff;
			word-break: break-all;
		}

		.info-text {
			padding: 5px 20px;
			color: #dedede;
			font-size: 14px;
		}
	}
</style>
