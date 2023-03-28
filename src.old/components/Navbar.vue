<template lang="pug">
  v-app-bar(
    dense dark color="#54A09F" fade-img-on-scroll app fixed hide-on-scroll
  :shrink-on-scroll="!$vuetify.breakpoint.smAndDown"
    :prominent="!$vuetify.breakpoint.smAndDown"
    :src="require('~/assets/img/background.png')"
  )
    v-toolbar.pa-1(absolute dense flat style="right: 0; left: 0;" color="transparent")
      img.my-1(v-if="$vuetify.breakpoint.smAndDown" v-show="isIntersect" :src="require('~/assets/img/tacx.png')" height="80%" contain)
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
        img.hidden-sm-and-down.py-1.mr-4(v-show="!isIntersect" :src="require('~/assets/img/tacx.png')" height="48")
      v-tabs(show-arrows optional)
        v-tab.white--text(to="/?noredirect=1" href="/") Accueil
        v-tab.white--text(to="/stream") Stream
        v-tab.white--text(to="/planning") Planning
        v-tab.white--text(to="/experiences") Nos expériences
        //v-tab.white--text(to="/creations") Nos créations
        //v-tab.white--text(to="/team") La Team
        v-menu(bottom left offset-y)
          template(#activator="{ on }")
            v-btn.white--text.align-self-center.mr-4(v-on="on" text style="height: 100%; border-radius: 0;")
              v-icon mdi-plus
          v-list
            v-list-item(href="https://www.twitch.tv/tacxtv/videos" target="_blank")
              v-list-item-icon
                v-icon mdi-twitch
              v-list-item-content
                v-list-item-title Rediffusions
            v-list-item(@click="contact")
              v-list-item-icon
                v-icon mdi-email
              v-list-item-content
                v-list-item-title Contact
        v-spacer
        v-tab.yellow--text.mr-4(href="https://www.twitch.tv/subs/tacxtv" target="_blank")
          v-icon(left color="yellow") mdi-heart
          span Nous soutenir
</template>

<script>

export default {
  data: () => ({
    isIntersect: true,
  }),
  methods: {
    contact() {
      window.open('mailto:contact@tacxtv.fr?subject=Je%20souhaite%20te%20contacter&body=Bonjour%2C%0D%0A', '_self')
    },
  },
  mounted() {
    window.onscroll = (ev) => {
      this.isIntersect = window.pageYOffset < 25
    };
  }
}
</script>
