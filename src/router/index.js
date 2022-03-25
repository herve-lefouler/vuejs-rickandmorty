import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EpisodeDetail from '../views/EpisodeDetail.vue'
import CharacterDetail from '../views/CharacterDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/episode/:episodeId',
    name: 'Episode',
    component: EpisodeDetail,
    props: true
  },
  {
    path: '/character/:characterId',
    name: 'Character',
    component: CharacterDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
