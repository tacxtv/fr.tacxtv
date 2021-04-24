<template lang="pug">
  v-app(:style="appStyle")
    v-main.h-screen
      v-app-bar(dense dark color="green darken-2")
        v-app-bar-title TacxTV
      v-container(fluid :style="{height: 'calc(100% - 48px)'}")
        nuxt
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  computed: {
    appStyle() {
      let out = {}
      let currentTheme = this.$vuetify.theme.currentTheme
      for (let index in currentTheme) {
        if (currentTheme.hasOwnProperty(index)) {
          out[`--v-color-${index}`] = currentTheme[index]
        }
      }
      return out
    },
  },
}
</script>
