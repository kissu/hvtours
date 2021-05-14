export const state = () => ({
  user : {},
})


export const actions = {
    // ....
  logOut() {
    this.$auth.logout()
    this.$auth.$storage.removeUniversal("pro")
  },

  setUser() {
 
    

  }

}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}