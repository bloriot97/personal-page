<template>
  <div id="app">
      <div id="flex_container">
          <h1>{{$t('hey_title')}}</h1>
          <h2>{{$t('hey_subtitle')}}</h2>
          <div class="actions">
            <Button link="/docs/Benjamin_Loriot_resume.pdf" :text="$t('my_resume')"/>
          </div>
          <div>
            <hr>
          </div>
          <div class="links">
              <a class="link" href="https://www.linkedin.com/in/bloriot">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a class="link" href="https://github.com/bloriot97">
                  <font-awesome-icon :icon="['fab', 'github']" />
              </a>
          </div>
      </div>
    <LanguageSwitch id="language_switch" class="no-print"/>
  </div>
</template>

<script>
import LanguageSwitch from './components/LanguageSwitch.vue'
import Button from './components/Button.vue'

export default {
  name: 'app',
  components: {
    LanguageSwitch,
    Button,
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
    html {
        scroll-behavior: smooth;
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
        max-width: 500px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      margin: auto;
    }
    #language_switch{
        position: fixed;
        top: 20px;
        right: 20px;
    }
    a.link {
        color: inherit;
        text-decoration:none;
        transition: 0.1s;
        display: inline-block;
        -webkit-text-decoration-skip: objects;

    }
    hr {
      border-top: 1px #526c85;
    }

    .actions {
      margin: 32px;
    }

    a.link::first-letter {
        text-decoration: underline;
    }
    a.link:hover {
        color: $link_color;
        transition: 0.2s;
        text-decoration: underline;
    }
    footer {
        text-align: center;
        width: 100%;
        padding: 30px 0 10px 0px;
    }

    .nobreak {
        white-space: nowrap;
    }

    .links{
        font-size: 1.8em;
        & > a{
            padding: 0 5px;
        }
    }
</style>
