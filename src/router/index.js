import { createRouter, createWebHistory } from "vue-router";
// Import Layouts
import FrontendLayout from "@/layouts/Frontend.vue";
import BackendLayout from "@/layouts/Backend.vue";

// import views from Frontend
import Home from "@/views/frontend/Home";
import About from "@/views/frontend/About";
import Contact from "@/views/frontend/Contact";
import ForgotPassword from "@/views/frontend/ForgotPassword";
import Login from "@/views/frontend/Login";
import Portfolio from "@/views/frontend/Portfolio";
import Register from "@/views/frontend/Register";
import Service from "@/views/frontend/Service";
import NotFound404 from "@/views/frontend/NotFound404";

// Import views from Backend
import Dashboard from "@/views/backend/Dashboard";
import Products from "@/views/backend/Products";

/** ทดสอบตัวแปรว่าล็อกอินหรือยัง */
// let state = false;

/** ฟังก์ชันสำหรับตรวจสอบ route ก่อนเรียกใช้งาน (Route Auth Guard) */
function authGuard(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("user")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next({ name: "Login" });
  }
}

const routes = [
  /** Frontend routes */
  {
    path: "/",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
    meta: {
      title: "หน้าหลัก",
      description: "หน้าหลักระบบคงคลังสินค้า",
    },
  },
  {
    path: "/about",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "About",
        component: About,
      },
    ],
  },
  {
    path: "/contact",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/forgotpassword",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "ForgotPassword",
        component: ForgotPassword,
      },
    ],
  },
  {
    path: "/login",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/portfolio",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Portfolio",
        component: Portfolio,
      },
    ],
  },
  {
    path: "/register",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: "/service",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Service",
        component: Service,
      },
    ],
  },

  // Error 404
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: "404 ไม่พบหน้านี้",
      description: "รายละเอียดหน้า 404",
    },
  },

  /** Backend Route */
  {
    path: "/backend",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: authGuard,
        //beforeEnter: (to, from, next) => {
        //  if (state) {
        //    next(); // คือ Dashboard
        //  } else {
        //    next({ name: "Login" });
        //  }
        //},
      },
    ],
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/backend",
    component: BackendLayout,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
        beforeEnter: authGuard,
        //beforeEnter: (to, from, next) => {
        //  if (state) {
        //    next(); // คือ Dashboard
        //  } else {
        //    next({ name: "Login" });
        //  }
        //},
      },
    ],
    meta: {
      title: "Products",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
