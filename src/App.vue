<template>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { DefaultLayout } from '@/layouts/index'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    DefaultLayout
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  },
})
</script>

