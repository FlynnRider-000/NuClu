import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  firstname: 'Sidney',
  lastname: 'Ondap',
  email: '',
  username: '',
  password: '',
  birthday: '',
  gender: '',
})

// getters
const getters = {
  getFullName: (state) => {
    return state.firstname + ' ' + state.lastname;
  }
}

// actions
const actions = {
  setNewUserInfo ({ commit }, profileData) {
    commit('setUserProfile', profileData)
  }
}

// mutations
const mutations = {
  setUserProfile (state, profileData) {
    state.firstname = profileData.firstname;
    state.lastname = profileData.lastname;
    state.email = profileData.email;
    state.username = profileData.username;
    state.password = profileData.password;
    state.birthday = profileData.birthday;
    state.gender = profileData.gender;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}