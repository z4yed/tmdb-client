import { createWebHistory, createRouter } from "vue-router";
import { Home, SeriesDetails, Search } from "@/views/index.js";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
