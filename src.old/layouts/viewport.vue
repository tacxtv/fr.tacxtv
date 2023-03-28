<template lang="pug">
  v-app(:style="appStyle")
    v-main.h-screen
      navbar
      v-container(:style="{height: 'calc(100% - 48px)', maxWidth: 1366}")
        nuxt
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  data: () => ({
    isIntersect: true,
  }),
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
  mounted() {
    window.onscroll = (ev) => {
      this.isIntersect = window.pageYOffset < 25
    };
  }
}
</script>
