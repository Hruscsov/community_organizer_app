import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import NotFound from '../pages/NotFound.vue'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/Profile.vue'
import AnalyticalPlatforms from '../pages/AnalyticalPlatforms.vue'
import Databases from '../pages/Databases.vue'
import ExposurePlatforms from '../pages/ExposurePlatforms.vue'
import GlobalMap from '../pages/GlobalMap.vue'


const routes = [
  {
    path: '/',
    component: GuestLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'login', name: 'login', component: Login },
      { path: 'signup', name: 'signup', component: Signup }
    ]
  },
  {
    path: '/dashboard',
    component: DefaultLayout,
    children: [
      {path: '', name: 'dashboard', component: Dashboard},
      {path: 'profile', name: 'profile', component: Profile},
      {path: 'analytical-platforms', name: 'analyticalplatforms', component: AnalyticalPlatforms},
      {path: 'databases', name: 'databases', component: Databases},
      {path: 'exposure-platforms', name: 'exposureplatforms', component: ExposurePlatforms},
      {path: 'global-map', name: 'globalmap', component: GlobalMap},
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Globális guard a privát oldalakhoz
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const publicPages = ['/', '/login', '/signup']

  if (!publicPages.includes(to.path) && !token) {
    next('/login') // ha nincs token, visszadob a loginra
  } else {
    next()
  }
})

export default router
