import { createStore } from "vuex";

import tasks from './tasks';
import tags from './tags';

const store = createStore({
  modules: {
    tasks,
    tags
  }
});

export default store
