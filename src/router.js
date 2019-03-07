import Vue from 'vue'
import Router from 'vue-router'
import players from './views/players.vue'
import game from './views/game.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'players'
    },
    {
      path: '/players',
      name: 'players',
      component: players
    },
    {
      path: '/game/:gId',
      name: 'game',
      component: game
    }
  ]
})
