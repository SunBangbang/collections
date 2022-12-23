<template>
	<div class="password-page">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" :border="false" />
		<div class="info">
			<van-cell-group inset class="groupstl">
				<van-field v-model="tel" type="tel" maxlength="11"  placeholder="请输入手机号" />
			</van-cell-group>
			<van-cell-group inset class="grouppass">
				<van-field v-model="code" type="digit" placeholder="请输入短信验证码" maxlength="6">
					<template #button>
						<van-button size="mini" class="button" @click="gocode" :round="true" type="primary">{{codetext}}
						</van-button>
					</template>
				</van-field>
			</van-cell-group>
			<van-cell-group inset class="grouppass">
				<van-field v-model="password" placeholder="请输入新密码" maxlength="12" />
			</van-cell-group>
			<van-cell-group inset class="grouppass">
				<van-field v-model="qerpassword" placeholder="请再次输入新密码" maxlength="12" />
			</van-cell-group>
			<div class="register-btn">
				<van-button type="primary" size="large" :round="true">提交</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'onChengePassword',
		data() {
			return {
				title: '修改登录密码',
				tel:'',
				code:'',
				password:'',
				qerpassword:'',
				codetext: '获取验证码',
				codesj: 60,
				timer: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/set')
			},
			gocode() {
				if (this.tel.length < 11) {
					this.$notify('请填写手机号不能小于11位');
					return
				}
				if (this.codesj == 60) {
					this.$notify({
						type: 'success',
						message: '发送成功'
					});
					this.timer = setInterval(() => {
						this.valChange()
					}, 1000)
				} else {
					this.$notify('请等待倒计时结束');
				}
			
			},
			valChange() {
				this.codesj--
				this.codetext = this.codesj
				if (this.codesj < 1) {
					this.codesj = 60
					this.codetext = '重新获取'
					clearTimeout(this.timer)
				}
			},
		}
	}
</script>
<style>
	#app .password-page .van-nav-bar {
		background-color: rgba(0, 0, 0, 0.0);
	}

	#app .password-page .van-nav-bar__title {
		color: #fff;
	}

	#app .password-page .van-nav-bar .van-icon {
		color: #fff;
	}
	#app .password-page .register-btn .van-button{
		height: 40px;
		border-radius: 8px;
	}
	:root {
		--van-cell-group-inset-padding: 0;
		--van-cell-background-color: rgba(75, 88, 127, 0.2);
		--van-background-color-light: rgba(75, 88, 127, 0.2);
		--van-field-input-text-color: #9090A0;
		--van-button-primary-background-color: linear-gradient(90deg, #07BDF0, #0D65FC);
	}
	
	input.van-field__control::-webkit-input-placeholder {
		color: #9090A0;
	
	}
</style>
<style scoped lang="less">
	.password-page{
		width: 100%;
		min-height: 100vh;
		background-image: url(/src/assets/home/bg.png);
		background-size: 100% 100vh;
		background-repeat: no-repeat;
		background-color: #000000;
		.info{
			padding: 0 20px;
			.groupstl {
				margin-top: 30px;
			}
			
			.grouppass {
				margin-top: 15px;
			
				.button {
					width: 80px;
				}
			}
			
			.register-btn {
				width: 100%;
				margin-top: 50px;
			}
		}
	}
</style>