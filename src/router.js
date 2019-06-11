import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/auth_pages/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/auth_pages/Register.vue")
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/referrals",
      name: "referrals",
      component: () => import("./components/main_components/Referrals.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/earnings",
      name: "earnings",
      component: () => import("./components/main_components/Earnings.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("./components/main_components/Notifications.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signals",
      name: "signals",
      component: () => import("./components/main_components/Signals.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("./components/main_components/Checkout.vue"),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/payment_methods",
      name: "payment_methods",
      component: () =>
        import("./components/main_components/PaymentMethods.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
