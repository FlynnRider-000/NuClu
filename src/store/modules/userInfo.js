import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  firstname: 'Ray',
  lastname: 'Ondap_1',
  username: '',
  backImgUrl: require('../../assets/image/addFriend/avatar1.png'),
  profileImgUrl: require('../../assets/image/addFriend/avatar.png'),
})

// getters
const getters = {
  getFullName: (state) => {
    return state.firstname + ' ' + state.lastname;
  },
  getProfileImgUrl: (state) => {
    return 'url(' + state.profileImgUrl + ')';
  }
}

// actions
const actions = {
  setUserInfo ({ commit }, InfoData) {
    commit('setUserInfo', InfoData)
  }
}

// mutations
const mutations = {
  setUserInfo (state, profileData) {
    state.firstname = profileData.firstname;
    state.lastname = profileData.lastname;
    state.username = profileData.username;

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}