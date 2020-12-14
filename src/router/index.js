import { createRouter, createWebHistory } from "vue-router"
import Container from "../layout/Container.vue"

const routes = [
  {
    path: "/",
    name: "Container",
    component: Container,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "../layout/Home.vue")
      },
      {
        path: "/detail/:alpha3Code",
        name: "Detail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Detail" */ "../layout/Detail.vue")
      }

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
