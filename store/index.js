const state = () => ({})

const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

const mutations = {}

const actions = {
  nuxtServerInit() { }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
