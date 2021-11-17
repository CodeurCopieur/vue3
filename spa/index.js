const page1 = {
  template: '<div> page 1</div>'
}
/* Définir des indications de navigateur par Composant */
const page2 = {
  template: '<div> page 2</div>',
  beforeRouteEnter: (to, from, next) => {
    // Avant la confirmation de route
  },
  beforeRouteUpdate: (to, from, next) => {
    // Quand la route change
  },
  beforeRouteLeave: (to, from, next) => {
    // Juste avant la changement de route
  }
}

const page3 = {
  template: '<div> page 3</div>'
}

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: page1,
    },
    {
      path: '/page2',
      component: page2,
    },
    {
      path: '/page3',
      component: page3,
      beforeEnter: (to, from, next) =>{
        console.log(to, from);
        next(false);
        /* Définir des indications de navigateur par route */
      }
    }
  ]
});

/*
  // Définir des indications de navigateur globaux

  router.beforeEach( (to, from, next) => {
    console.log(to, from);
    next(false) // bloque la navigation
  });
*/

const app = Vue.createApp({});
app.use(router)
app.mount('#app');