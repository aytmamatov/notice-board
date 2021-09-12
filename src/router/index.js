import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import NewAd from "@/components/Ads/NewAd";
import AdList from "@/components/Ads/AdList";
import Ad from "@/components/Ads/Ad";
import Orders from "@/components/User/Orders";
import Login from "@/components/Auth/Login";
import Registration from "@/components/Auth/Registration";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "newAd",
    path: "/newad",
    component: NewAd,
  },
  {
    name: "ad",
    path: "/ad/:id",
    props: true,
    component: Ad,
  },
  {
    name: "list",
    path: "/list",
    component: AdList,
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
  },
  {
    name: "reg",
    path: "/registration",
    component: Registration,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
