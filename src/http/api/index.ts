import { get, post } from "../../http/api.ts";

// 登录
export const Login = (params) => post("/data/api.login/in", params);
// 获取验证码
export const Code = (params) => post("/data/api.login/sendsms", params);
// 获取图片验证码
export const Captcha = () => post("/data/api.login/captcha");
// 注册
export const Register = (params) => post("/data/api.login/register", params);
// 协议
export const GetAbout = () => post("/data/api.data/getAbout");
// 轮播图
export const GetSlider = () => post("/data/api.data/getSlider");
// 公告
export const NewArticle = () => get("/data/api.news/newArticle");
// 热门推荐
export const GetHot = (params) => get("/data/api.auth.collection/getHot", params);
// 用户信息
export const Center = () => post("/data/api.auth.center");
