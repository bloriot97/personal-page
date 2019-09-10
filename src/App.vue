<template>
  <div id="app">
    <div id="sidebar_container">
      <img id='picture' src="@/assets/picture.png"/>
      <h1> Benjamin LORIOT </h1>
      <SideBar selected="education"/>
    </div>
    <div id="main_body">
      <MainContainer/>
    </div>
    <LanguageSwitch id="language_switch"/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import MainContainer from './components/MainContainer.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    MainContainer,
    LanguageSwitch,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px;
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: $breakpoint-phone) {
            margin: 10px;
        }
        @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
            margin: 30px;
        }
    }
    #sidebar_container {
        width: 300px;
        text-align: center;
    }
    #picture {
        width: 100%;
        border-radius: 50%;
    }
    #language_switch{
        display: block;
        position: fixed;
        top: 20px;
        right: 20px;
    }
    #main_body{
        flex: 1 auto;
    }
    a {
        color: inherit;
        text-decoration:none;
    }
    a:hover {
        color: #1abc9c;
    }
</style>
