import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "login",
		component: () => import("../components/LoginComp.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../components/RegisterComp.vue"),
	},
	{
		path: "/forgot",
		name: "forgotPassword",
		component: () => import("../components/ForgotPassword.vue"),
	},
	{ path: "/", redirect: "/login" },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
