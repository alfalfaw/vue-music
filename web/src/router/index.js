import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Recommend from '../views/Recommend'
import Search from '../views/Search'
import Singer from '../views/Singer'
import Rank from '../views/Rank'
import Player from '../views/Player'
import Playlist from '../views/Playlist'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    // redirect: '/recommend',
    children: [
      {
        path: '/',
        component: Recommend
      },

      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/rank',
        component: Rank
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/singer',
        component: Singer
      },
      {
        path: '/player',
        component: Player
      },
      {
        path: '/playlist',
        component: Playlist
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
