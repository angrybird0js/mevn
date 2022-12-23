import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/data/string',
    name: 'bindString',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindString.vue'
      )
  },
  {
    path: '/data/tohtml',
    name: 'bindHtml',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindtoHtml.vue'
      )
  },
  {
    path: '/data/inputs',
    name: 'inputs',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindInput.vue'
      )
  },
  {
    path: '/data/select',
    name: 'select',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindSelect.vue'
      )
  },
  {
    path: '/data/check',
    name: 'check',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindCheckbox.vue'
      )
  },
  {
    path: '/data/attr',
    name: 'attr',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindAtrribute.vue'
      )
  },
  {
    path: '/data/list',
    name: 'list',
    component: () =>
      import(
        /* webpackChunkName: "databind", webpackPrefetch:true */ '../views/1_data/bindList.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
