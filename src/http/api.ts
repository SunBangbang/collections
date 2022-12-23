import axios from "axios"; // 引用axios
import config from "@/http/config.ts";
import { Geetest } from "@/common/captchaObj.js"
const loginValidate = new Geetest('f4011827b4c79331cceed4618e511bfe');

const instance = axios.create({
	baseURL: config.baseUrl.dev,
	timeout: 60000,
});

export function get(url, params) {
	var times = Math.round(new Date().getTime() / 1000).toString()
	return new Promise((resolve, reject) => {
		instance
			.get(url, {
				params: params,
				headers: {
					'api-token': localStorage.getItem('Authorization'),
					// "time": times,
					// 'Content-Type': 'application/x-www-form-urlencoded',
					// "auth": "590596e4936cee323b612fe3104f4ca5" + times
				}
			})
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				reject(err);
			});
	});
}

export async function post(url, data) {
	if (url == "/data/api.login/captcha") {
		const _captcha = await loginValidate.validate();
		var geetestCaptchaValidate = _captcha.getValidate()
		window.localStorage.setItem('code', JSON.stringify(geetestCaptchaValidate))
		_captcha.destroy();
	}
	return new Promise((resolve, reject) => {
		instance.post(url, data).then(
			(response) => {
				resolve(response.data);
			},
			(err) => {
				reject(err);
			}
		);
	});
}
