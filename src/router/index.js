import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import Home from '../views/Home/home.vue'

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: () => import( /* webpackChunkName: "about" */ '../views/Login/login.vue')
	},
	{
		path: '/details',
		name: 'details',
		component: () => import( /* webpackChunkName: "about" */ '../views/Details/details.vue')
	},
	{
		path: '/collection',
		name: 'collection',
		component: () => import( /* webpackChunkName: "about" */ '../views/Collection/collection.vue')
	},
	{
		path: '/order',
		name: 'order',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Order/order.vue')
	},
	{
		path: '/agreement',
		name: 'agreement',
		component: () => import( /* webpackChunkName: "about" */ '../views/Login/Agreement/agreement.vue')
	},
	{
		path: '/realname',
		name: 'realname',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/RealName/realname.vue')
	},
	{
		path: '/my',
		name: 'my',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/my.vue')
	},
	{
		path: '/changeinfo',
		name: 'changeinfo',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Set/ChangeInfo/changeinfo.vue')
	},
	{
		path: '/changepassword',
		name: 'changepassword',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Set/ChangePassword/changepassword.vue')
	},
	{
		path: '/changepay',
		name: 'changepay',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Set/ChangePay/changepay.vue')
	},
	{
		path: '/changetel',
		name: 'changetel',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Set/ChangeTel/changetel.vue')
	},
	{
		path: '/share',
		name: 'share',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Share/share.vue')
	},
	{
		path: '/set',
		name: 'set',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Set/set.vue')
	},
	{
		path: '/message',
		name: 'message',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Message/message.vue')
	},
	{
		path: '/aboutus',
		name: 'aboutus',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/AboutUs/aboutus.vue')
	},
	{
		path: '/wallet',
		name: 'wallet',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Wallet/wallet.vue')
	},
	{
		path: '/feedback',
		name: 'feedback',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Feedback/feedback.vue')
	},
	{
		path: '/record',
		name: 'record',
		component: () => import( /* webpackChunkName: "about" */ '../views/My/Record/record.vue')
	},
	{
		path: '/market',
		name: 'market',
		component: () => import( /* webpackChunkName: "about" */ '../views/Market/market.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import( /* webpackChunkName: "about" */ '../views/Register/register.vue')
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
