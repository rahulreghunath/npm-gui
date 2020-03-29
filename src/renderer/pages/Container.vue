<template>
  <div class="window" id="app">
    <!-- Your app's content goes inside .window-content -->
    <div class="window-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar';
  export default {
    components:{SideBar}
  }
</script>
