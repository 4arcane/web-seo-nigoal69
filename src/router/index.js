import { createRouter, createWebHistory } from 'vue-router'
import App from './../views/HomePage.vue'
import Promotion from './../views/PromotionPage.vue'
import GameOnline from './../views/GameOnlinePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      route: 'Home',
      component: App,
      name: '',
      redirect: ''
    }
  ]
})

router.addRoute('Home', { path: '', component: App })
router.addRoute('PopularCamp', { path: encodeURI(`/โปรโมชั่น`), component: Promotion })
router.addRoute('GameOnline', { path: encodeURI(`/เกมออนไลน์`), component: GameOnline })
export default router
