import { createWebHistory, createRouter } from "vue-router";
import { Home, SeriesDetails, Search, NotFound } from "@/views/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/series/:id",
    name: "SeriesDetails",
    component: SeriesDetails,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
