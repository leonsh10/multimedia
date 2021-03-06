import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Package from "../views/Package.vue";
import Tickets from "../views/Tickets.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Booking from "../views/Booking.vue";
import Player from "../views/Player.vue";
import Resorts from "../views/Resorts.vue";
import UserProfile from "../views/profile/UserProfile.vue"
import AboutUs from "../views/AboutUs.vue"
import Aboutus1 from "../views/Aboutus1.vue"
import AboutUs2 from "../views/AboutUs2.vue"
import Aboutus3 from "../views/Aboutus3.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/package",
    name: "package",
    component: Package,
  },
  {
    path: "/tickets",
    name: "tickets",
    component: Tickets,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
  },
  {
    path: "/player",
    name: "player",
    component: Player,
  },

  {
    path: "/resorts",
    name: "resorts",
    component: Resorts,
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: UserProfile
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUs
  },
  {
    path: "/aboutus1",
    name: "aboutus1",
    component: Aboutus1
  },
  {
    path: "/aboutus2",
    name: "aboutus2",
    component: AboutUs2
  },
  {
    path: "/aboutus3",
    name: "aboutus3",
    component: Aboutus3
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;


