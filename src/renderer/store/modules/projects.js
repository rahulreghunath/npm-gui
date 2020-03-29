const state = {
  projects:[]
};
const getters={
  projects(state){
    return state.projects;
  }
};

const mutations = {
  ADD_PROJECT (state,project) {
    state.projects.push(project);
  },
};


export default {
  state,
  mutations,
  getters
}
