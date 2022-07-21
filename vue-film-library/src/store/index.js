import { createStore } from "vuex";

import task from './task';

const store = createStore({
  modules: {
    task
  }
});

export default store
