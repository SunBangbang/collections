<template>
	<div class="register-page">
		<div class="register-title">注册</div>
		<van-cell-group inset class="groupstl">
			<van-field v-model="info.stl" type="tel" maxlength="11" placeholder="请输入手机号" />
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.code" type="digit" placeholder="请输入短信验证码" maxlength="6">
				<template #button>
					<van-button size="mini" class="button" @click="gocode" :round="true" type="primary">{{codetext}}
					</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.password" placeholder="请输入密码" maxlength="12" />
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.qerpassword" placeholder="请再次输入密码" maxlength="12" />
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.pay_password" placeholder="请输入初始交易密码" maxlength="6" />
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.invite_code" placeholder="请填写邀请码" maxlength="12" />
		</van-cell-group>
		<div class="register-btn">
			<van-button type="primary" size="large" @click="gologin" :round="true">注册</van-button>
		</div>
		<div class="register-text">
			<div @click="gonav">
				已有账号，
				<span>去登陆</span>
			</div>
		</div>
		<van-loading type="spinner" v-if="loading" :vertical="true" />
	</div>
</template>

<script>
	import {
		Code,
		Captcha,
		Register
	} from '@/http/api/index.ts'
	export default {
		name: 'MyRegister',
		data() {
			return {
				info: {
					stl: '',
					code: '',
					password: '',
					qerpassword: '',
					invite_code:'',
					pay_password:''
				},
				codetext: '获取验证码',
				codesj: 60,
				timer: '',
				loading: false
			}
		},
		methods: {
			gocode() {
				if (this.info.stl.length < 11) {
					this.$notify('请填写手机号不能小于11位');
					return
				}
				this.loading = true
				if (this.codesj == 60) {
					Captcha().then(res => {
						let formData = new FormData()
						formData.append('phone', this.info.stl);
						let code = JSON.parse(localStorage.getItem("code"))
						formData.append('type', 1)
						formData.append('captcha_id', code.captcha_id)
						formData.append('lot_number', code.lot_number)
						formData.append('pass_token', code.pass_token)
						formData.append('gen_time', code.gen_time)
						formData.append('captcha_output', code.captcha_output)
						console.log(formData)
						setTimeout(() => {
						Code(formData).then(res => {
							if (res.code == 0) {
								this.loading = false
								this.$notify(res.info);
							} else {
								this.loading = false
								this.$notify({
									type: 'success',
									message: res.info
								});
								this.timer = setInterval(() => {
									this.valChange()
								}, 1000)
							}
						})
						}, 1000)
					})
				} else {
					this.loading = false
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
			gonav() {
				this.$router.push('/login')
			},
			gologin() {
				if (this.info.stl.length < 11) {
					this.$notify('请填写手机号不能小于11位');
					return
				}
				if (this.info.code.length < 1) {
					this.$notify('验证码不可为空');
					return
				}
				if (this.info.password.length < 5) {
					this.$notify('请填写密码不能小于6位');
					return
				}
				if (this.info.password!= this.info.qerpassword) {
					this.$notify('两次密码不一致');
					return
				}
				if (this.info.pay_password.length !=6) {
					this.$notify('交易密码为6位数');
					return
				}
				this.info.password = this.$md5(this.info.password)
				this.info.qerpassword = this.$md5(this.info.qerpassword)
				this.loading = true
				let formData = new FormData()
				formData.append('phone', this.info.stl);
				formData.append('verify', this.info.code);
				formData.append('password', this.info.password);
				formData.append('true_password', this.info.qerpassword);
				formData.append('invite_code', this.info.invite_code);
				formData.append('pay_password', this.info.pay_password);
				Register(formData).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.loading = false
						this.$notify(res.info);
					} else {
						this.loading = false
						this.$notify({
							type: 'success',
							message: res.info
						});
						this.$router.push('/login')
					}
				})
			}
		}
	}
</script>
<style>
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
	.register-page {
		width: 100%;
		height: 100vh;
		background: url(/src/assets/login/bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100vh;
		padding: 0 20px;

		.register-title {
			width: 100%;
			color: #fff;
			padding-top: 100px;
			font-size: 26px;
		}

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

		.register-text {
			padding: 15px 20px;
			text-align: center;

			div {
				color: #9090A0;
				font-size: 12px;

				span {
					color: #fff;
				}
			}
		}
	}
</style>
