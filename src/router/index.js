import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AddTodoView from '../views/AddTodoView.vue';
import EditTodoView from '../views/EditTodoView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'AddTodo',
      component: AddTodoView,
    },
    {
      path: '/todos/:id',
      name: 'EditTodo',
      component: EditTodoView,
      props: true,
    },

    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
