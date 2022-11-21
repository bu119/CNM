import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import MovieView from '@/views/MovieView'
import DetailView from '@/views/DetailView'
import ProfileView from '@/views/ProfileView'
import CategoryLanguageView from '@/views/CategoryLanguageView'
import CategoryGenreView from '@/views/CategoryGenreView'
import EditProfileView from '@/views/EditProfileView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/:username',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/:username',
    name: 'EditProfileView',
    component: EditProfileView
  },
  {
    path: '/',
    name: 'CategoryLanguageView',
    component: CategoryLanguageView
  },
  {
    path: '/',
    name: 'CategoryGenreView',
    component: CategoryGenreView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
