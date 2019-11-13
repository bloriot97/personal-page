<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
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

    a {
        color: inherit;
        text-decoration:none;
        transition: 0.1s;
        display: inline-block;
        text-decoration-skip: objects;
        -webkit-text-decoration-skip: objects;

    }
    a::first-letter {
        text-decoration: underline;
    }
    a:hover {
        color: $link_color;
        transition: 0.2s;
        text-decoration: underline;
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

    .links{
        font-size: 1.8em;
        & > a{
            padding: 0 5px;
        }
    }
</style>
