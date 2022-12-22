import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/CreateAndEditIndex")
  },
  {
    path: "/edit/:id",
    name: "edit",
    props: true,
    component: () => import("@/views/CreateAndEditIndex")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound404",
    component: () => import("@/views/NotFound404")
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})