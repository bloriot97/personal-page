<template>
  <div id="app">
      <div id="flex_container">
          <div id="sidebar_container" class="no-print">
              <img id='picture' src="@/assets/picture.png"/>
              <h1> Benjamin LORIOT </h1>
              <SideBar selected="education"/>
          </div>
          <div id="main_body">
              <MainContainer/>
          </div>
      </div>
    <LanguageSwitch id="language_switch" class="no-print"/>
    <footer> Designed and developed by Benjamin Loriot </footer>
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
        margin: 60px 60px 0px 60px;
    }
    #flex_container {
        width: 100%;
        display: flex;
        @media screen and (max-width: $breakpoint-phone) {
            margin: 10px;
            flex-direction: column;
            align-items: center;
        }
        @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
            margin: 30px;
        }
    }
    #sidebar_container {
        width: $side_bar_width;
        text-align: center;
    }
    #picture {
        width: 80%;
        border-radius: 50%;
    }
    #language_switch{
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
        transition: 0.1s;
    }
    a:hover {
        color: #1abc9c;
        transition: 0.1s;
    }
    footer {
        text-align: center;
        width: 100%;
        padding: 30px 0 10px 0px;
    }

    .nobreak {
        white-space: nowrap;
    }
    @media print
    {
        .no-print, .no-print *
        {
            display: none !important;
        }
    }
</style>
