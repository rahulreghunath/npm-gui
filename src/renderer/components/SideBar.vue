<template>
  <div class="pane pane-sm sidebar">
    <nav class="nav-group">
      <h5 class="nav-group-title">Favorites</h5>


      <router-link class="nav-group-item" tag="span" :to="{name:'home'}" active-class="active">
        <span class="icon icon-home"></span>
        Projects
      </router-link>

      <span class="nav-group-item" >
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
</template>

<script>
  export default {
    name:'SideBar',
  };
</script>

<style scoped>

</style>
