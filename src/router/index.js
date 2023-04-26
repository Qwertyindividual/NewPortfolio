import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "DashboardView",
    component: DashboardView,
    children: [
      {
        path: "/",
        component: () => import("../views/HomeView.vue"),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
      {
        path: "/about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
      {
        path: "/resume",
        component: () =>
          import(/* webpackChunkName: "resume" */ "../views/ResumeView.vue"),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
      {
        path: "/projects",
        component: () =>
          import(
            /* webpackChunkName: "projects" */ "../views/ProjectsView.vue"
          ),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
      {
        path: "/testimonials",
        component: () =>
          import(
            /* webpackChunkName: "testimonials" */ "../views/TestimonialsView.vue"
          ),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
      {
        path: "/contact",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
        meta: {
          enterClass: "animate__animated animate__fadeInLeft",
          leaveClass: "animate__animated animate__fadeOutRight",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
