import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EpisodeDetail from '../views/EpisodeDetail.vue'
import CharacterDetail from '../views/CharacterDetail.vue'
import SearchView from '../views/SearchView.vue'
import CharacterCollection from '../views/CharacterCollection.vue'

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
  },
  {
    path: '/search/:words',
    name: 'Search',
    component: SearchView,
    props: true
  },
  {
    path: '/my-collection',
    name: 'My collection',
    component: CharacterCollection
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
