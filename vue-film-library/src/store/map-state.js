import { computed } from 'vue'
import { useStore } from 'vuex'

const mapState = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.state).map(
      key => [key, computed(() => store.state[key])]
    )
  )
}

const mapGetters = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.getters).map(
      getter => [getter, computed(() => store.getters[getter])]
    )
  )
}

export { mapState, mapGetters }