<template lang="pug">
  v-timeline(:dense="$vuetify.breakpoint.smAndDown")
    v-timeline-item(v-for="(year, i) in years" :key="i" :color="year.color")
      template(#icon)
        v-icon(small v-text="year.icon || 'mdi-home'")
      template(#opposite)
        span(:class="`headline font-weight-bold ${year.color}--text`" v-text="year.year")
      .py-4
        h2.text-center(:class="`headline font-weight-light mb-4 ${year.color}--text`" v-text="year.title")
        v-card.mx-auto
          v-tabs(vertical)
            v-tab(style="min-width: initial")
              v-icon mdi-text
            v-tab(style="min-width: initial")
              v-icon mdi-youtube
            v-tab(style="min-width: initial")
              v-icon mdi-circle
            v-tab-item
              v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at blanditiis debitis dolorem doloremque, ea eligendi excepturi harum, incidunt inventore iste libero quam quo sint temporibus totam veniam vitae, voluptate?
            v-tab-item
              iframe(width="100%" height="315" src="https://www.youtube.com/embed/Jh_-RgkEp2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          v-card-actions.pa-1
            v-spacer
            v-btn(color="primary" href="" target="_blank" text)
              v-icon(left) mdi-twitter
              span Tweet
            v-btn(color="primary" text) Bookmark
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'IndexPage',
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: 'Novembre 2021',
        title: 'Arma des dons (2e édition)',
        icon: 'mdi-cake-variant-outline',
      },
      {
        color: 'green',
        year: '1970',
        title: '1960',
      },
      {
        color: 'pink',
        year: '1980',
        title: '1960',
      },
      {
        color: 'amber',
        year: '1990',
        title: '1960',
      },
      {
        color: 'orange',
        year: '2000',
        title: '1960',
      },
    ],
  }),
}
</script>
