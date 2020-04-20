const state = {
  projects:[{name:'sdf',path:'dfsd'}]
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
  namespaced:true,
  state,
  mutations,
  getters
}
