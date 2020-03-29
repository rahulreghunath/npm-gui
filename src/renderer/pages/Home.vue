<template>
  <div class="pane-group">
    <side-bar></side-bar>
    <div class="pane">
      <table class="table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
        </thead>
        <tbody>
        <tr @click="select_project(project)" v-for="project in projects">
          <td>{{project.name}}</td>
          <td>{{project.path}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex';
  const {dialog}=require('electron').remote;
  const path=require('path');
  const Vue=require('vue/dist/vue');
  const {message}=require('../app/functions/helpers');
  import SideBar from '../components/SideBar';

  export default {
    name:'Home',
    components:{SideBar},
    data(){
      return {
      };
    },
    computed:{
      ...mapGetters({
        projects:'projects/projects',
      })
    },
    methods:{
      openFile(){
        dialog.showOpenDialog({properties:['openFile']}).then(({filePaths})=>{

          if(path.basename(filePaths[0])==='package.json'){
            let folders=path.dirname(filePaths[0]).split('/');
            this.projects.push({name:folders.slice(-1)[0],path:path.dirname(filePaths[0])});
          }else{
            message({
              remote:true,
              options:{
                type:'error',
                buttons:['OK'],
                defaultId:0,
                title:'OOPS',
                message:`Can't open file`,
                detail:`Please select package.json file`,
              },
            });
          }
        });
      },
      select_project(project){
        // redirect({path:'project_window',params:project})
      },
    },
    mounted(){
      console.log('sdf');
    },
  };
</script>


<style scoped>

</style>
