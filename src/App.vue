<template>
  <div id="app">
      <div id="flex_container">
          <div id="sidebar_container" class="no-print">
              <img id='picture' src="@/assets/picture.png"/>
              <h1> Benjamin LORIOT </h1>
              <div id="description">
                  {{$t('description')}}
              </div>
              <div>
                  {{$t('email')}}
              </div>
              <div>
                  {{$t('phone_number')}}
              </div>
              <div>
                  <a :href="$t('github')">{{$t('github')}}</a>
              </div>
              <SideBar selected="education"/>
          </div>
          <div id="main_body">
              <MainContainer/>
          </div>
      </div>
    <LanguageSwitch id="language_switch" class="no-print"/>
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
    @function set-button-text-color($color) {
        @if (lightness( $color ) > 40) {
            @return $primary_color;
        }
        @else {
            @return $clear_primary_color;
        }
    }

    body{
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $primary_color;
        margin: 0;
    }
    #flex_container {
        width: 100%;
        display: flex;
        @media screen and (max-width: $breakpoint-phone) {
            flex-direction: column;
            align-items: center;
        }
        @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
        }
    }
    #sidebar_container {
        width: $side_bar_width;
        background-color: $side_bar_color;
        text-align: center;
        padding: 20px;
        color: set-button-text-color($side_bar_color);
        @media screen and (max-width: $breakpoint-phone) {
            width: 100%;
        }
    }
    #picture {
        width: 80%;
        border-radius: 50%;
    }
    #description {
        padding: 20px 0px 40px 0;
    }
    #language_switch{
        position: fixed;
        top: 20px;
        right: 20px;
    }
    #main_body{
        flex: 1 auto;
        @media screen and (max-width: $breakpoint-phone) {
            width: 100%;
        }

    }
    a {
        color: inherit;
        text-decoration:none;
        transition: 0.1s;
    }
    a:hover {
        color: $link_color;
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
