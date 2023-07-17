import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";
import Login from "@/views/auth/Login.vue";
import Attendance from "@/views/attendance/Attendance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/attendance",
      name: "attendance",
      component: Attendance,
      redirect: { name: "attendance-logs" },
      children: [
        {
          path: "logs",
          name: "attendance-logs",
          component: () => import("@/views/attendance/Logs.vue"),
        },
        {
          path: "exports",
          vname: "attendance-exports",
          component: () => import("@/views/attendance/Exports.vue"),
        },
      ],
    },
  ],
});

export default router;
