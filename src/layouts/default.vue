<template lang="pug">
  v-app(:style="appStyle")
    v-main.h-screen
      v-app-bar(
        dense dark color="#54A09F" fade-img-on-scroll app fixed hide-on-scroll
      :shrink-on-scroll="!$vuetify.breakpoint.smAndDown"
      :prominent="!$vuetify.breakpoint.smAndDown"
      :src="require('~/assets/img/background.png')"
      )
        v-toolbar.pa-1(absolute dense flat style="right: 0" color="transparent")
          v-spacer
          v-fade-transition
            v-btn(v-show="isIntersect" href="https://twitch.tv/TacxTV" target="_blank" color="white" height="32" width="32" icon)
              v-icon mdi-twitch
          v-fade-transition
            v-btn(v-show="isIntersect" href="https://www.youtube.com/channel/UCF1aiSEX1-dM6oAnNhpyB0Q" target="_blank" color="white" height="32" width="32" icon)
              v-icon mdi-youtube
          v-fade-transition
            v-btn(v-show="isIntersect" href="https://discord.gg/NURBhQhY3f" target="_blank" color="white" height="32" width="32" icon)
              img(src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg" style="height: 18px;")
        v-img.my-1(v-if="!$vuetify.breakpoint.smAndDown" v-show="isIntersect" :src="require('~/assets/img/tacx.png')" height="80%" contain)
        template(#img="{ props }")
          v-img(v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)" aspect-ratio="1.7" )
        template(#extension)
          v-expand-transition
            img.hidden-sm-and-down.py-1(v-show="!isIntersect" :src="require('~/assets/img/tacx.png')" height="48")
          v-tabs(centered show-arrows optional)
            v-tab.white--text(to="/") Accueil
            v-tab.white--text(to="/stream") Stream
            v-tab.white--text(href="https://www.twitch.tv/tacxtv/videos" target="_blank") Rediffusions
            v-tab.white--text(to="/planning") Planning
            v-tab.white--text(to="/experiences") Nos expériences
            //v-tab.white--text(to="/creations") Nos créations
            //v-tab.white--text(to="/team") LA Team
      v-container(:style="{height: 'calc(100% - 48px)'}")
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
