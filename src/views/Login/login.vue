<template>
	<div class="login-page">
		<div class="lgoin-title">登录</div>
		<van-cell-group inset class="groupstl">
			<van-field v-model="info.phone" type="tel" maxlength="11" placeholder="请输入手机号" />
		</van-cell-group>
		<van-cell-group inset class="grouppass">
			<van-field v-model="info.password" type="password" placeholder="请输入登录密码" maxlength="12" />
		</van-cell-group>
		<div class="login-text">
			<div>忘记密码</div>
			<div @click="gonav('/register')"> <span>没有账号,</span>去注册</div>
		</div>
		<div class="login-btn">
			<van-button type="primary" size="large" @click="gologin" :round="true">登录</van-button>
		</div>
		<div class="login-checkbox">
			<van-checkbox v-model="checked" icon-size="14">
				<div>
					已阅读并同意
					<span @click.stop="gonav('/agreement','用户服务协议')">《用户服务协议》</span>
					<span @click.stop="gonav('/agreement','隐私授权政策')">《隐私授权政策》</span>
				</div>
			</van-checkbox>
		</div>
		<van-loading type="spinner" v-if="loading" :vertical="true" />
	</div>
</template>

<script>
	import {
		Login
	} from '@/http/api/index.ts'
	export default {
		name: 'MyLogin',
		data() {
			return {
				value: '',
				checked: false,
				loading: false,
				info: {
					phone: '18254966505',
					password: '123123'
				}
			}
		},
		methods: {
			gonav(name, type) {
				this.$router.push({
					path: name,
					query: {
						type
					}
				})
			},
			gologin() {
				if (this.checked == false) {
					this.$notify('请仔细阅读并同意协议');
					return
				}
				if (this.info.phone.length < 11) {
					this.$notify('请填写手机号不能小于11位');
					return
				}
				if (this.info.password.length < 6) {
					this.$notify('请填写密码不能小于6位');
					return
				}
				this.loading = true
				this.info.password = this.$md5(this.info.password)
				let formData = new FormData()
				for (var key in this.info) {
					formData.append(key, this.info[key]);
				}
				Login(formData).then(res => {
					console.log(res)
					this.loading = false
					if (res.code == 0) {
						this.$notify(res.info);
					} else {
						this.$notify({
							type: 'success',
							message: res.info
						});
						this.$router.push('/')
						this.$store.commit('changeLogin', {
							Authorization: res.data.token.token
						});
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
	.login-page {
		width: 100%;
		height: 100vh;
		background: url(/src/assets/login/bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100vh;
		padding: 0 20px;

		.lgoin-title {
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
		}

		.login-text {
			display: flex;
			justify-content: space-between;
			color: #fff;
			margin-top: 20px;
			font-size: 13px;
			padding: 0 5px;

			span {
				color: #9090A0;
			}
		}

		.login-btn {
			width: 100%;
			margin-top: 50px;
		}

		.login-checkbox {
			padding: 15px 20px;

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
