const routes = [
  {
    path: "/",
    component: () => import("components/LogInUser.vue"),
  },
  {
    path: "/register",
    component: () => import("components/RegistrationForm.vue"),
  },
  {
    path: "/Dashboard/Activity",
    component: () => import("components/DashboardActivity.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
