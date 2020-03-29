<template>
  <div class="window" id="app">
    <!-- Your app's content goes inside .window-content -->
    <div class="window-content">
      <div class="pane-group">
        <div class="pane pane-sm sidebar">
          <nav class="nav-group">
            <h5 class="nav-group-title">Favorites</h5>
            <span class="nav-group-item" @click="openFile">
                <span class="icon icon-folder"></span>
                Add Project
              </span>
            <span class="nav-group-item">
                <span class="icon icon-home"></span>
                connors
              </span>
            <span class="nav-group-item">
                <span class="icon icon-light-up"></span>
                Photon
              </span>
            <span class="nav-group-item">
                <span class="icon icon-download"></span>
                Downloads
              </span>
            <span class="nav-group-item">
                <span class="icon icon-window"></span>
                Applications
              </span>
            <span class="nav-group-item">
                <span class="icon icon-signal"></span>
                AirDrop
              </span>
            <span class="nav-group-item">
                <span class="icon icon-monitor"></span>
                Desktop
              </span>
          </nav>
        </div>

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
    </div>
  </div>
</template>

<script>
  const {dialog}=require('electron').remote;
  const path=require('path');
  const Vue=require('vue/dist/vue');
  // const {message,redirect} =require('../app/functions/helpers');
  export default {
    data(){
      return {
        projects:[],
      };
    },
    methods:{
      openFile(){
        dialog.showOpenDialog({ properties: ['openFile'] }).then(({filePaths})=>{

          if(path.basename(filePaths[0])==='package.json'){
            let folders=path.dirname(filePaths[0]).split('/');
            this.projects.push({name:folders.slice(-1)[0],path:path.dirname(filePaths[0])});
          }else {
            // message({
            //   remote:true,
            //   options: {
            //     type: 'error',
            //     buttons: ['OK'],
            //     defaultId: 0,
            //     title: 'OOPS',
            //     message: `Can't open file`,
            //     detail: `Please select package.json file`,
            //   }
            // });
          }
        })
      },
      select_project(project){
        // redirect({path:'project_window',params:project})
      }
    }
  }
</script>

<style scoped>

</style>
