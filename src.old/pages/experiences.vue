<template lang="pug">
  v-timeline(:dense="$vuetify.breakpoint.smAndDown")
    v-timeline-item(v-for="(experience, i) in getExperiences" :key="i" :color="experience.color")
      template(#icon)
        v-icon(v-text="experience.icon || 'mdi-home'")
      template(#opposite)
        span(:class="`headline font-weight-bold ${experience.color}--text`" v-text="experience.year")
      .py-4
        h2.text-center(:class="`headline font-weight-light mb-4 ${experience.color}--text`" v-text="experience.title")
        v-card.mx-auto
          v-tabs(:color="experience.color" :value="tabs[i]" vertical)
            v-tab(style="min-width: initial")
              v-icon mdi-text
            v-tab(v-if="experience.youtube" style="min-width: initial")
              v-icon mdi-youtube
            //v-tab(style="min-width: initial")
            //  v-icon mdi-circle
            v-tab-item
              v-card-text(v-text="experience.text")
              v-card-actions
                v-spacer
                v-btn(icon @click="stepTab(i)")
                  v-icon mdi-arrow-down
            v-tab-item(v-if="experience.youtube")
              iframe(width="100%" height="400" :src="experience.youtube.iframe.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              v-card-actions
                v-spacer
                v-btn(icon @click="stepTab(1)")
                  v-icon mdi-arrow-down
          v-card-actions.pa-1
            v-spacer
            //v-btn(color="primary" href="" target="_blank" text)
            //  v-icon(left) mdi-twitter
            //  span Tweet
            //v-btn(color="primary" text) Bookmark
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'IndexPage',
  layout: 'viewport',
  computed: {
    getExperiences() {
      return this.experiences.reverse()
    }
  },
  methods: {
    stepTab(i) {
      this.tabs[i]++
      debugger
    },
  },
  data: () => ({
    tabs: [],
    experiences: [
      {
        color: 'green',
        year: 'Avril/Mai 2021',
        title: 'Les débuts',
        icon: 'mdi-controller',
        text: 'On se demande comment cétait !',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/g0DL4-S-pLQ',
          },
        },
      },
      {
        color: 'green',
        year: 'Avril/Mai 2021',
        title: 'Serveur Minecraft',
        icon: 'mdi-controller',
        text: 'Premier serveur de la chaine, il a vu de grande et belle chose se construire au sein de son grand concours de construction',
      },
      {
        color: 'pink',
        year: '22/08/2021',
        title: 'Stream des 6 mois en retard',
        icon: 'mdi-cake-variant-outline',
        text: 'Stream des 6 mois en retard - Au menu, cosplay de Meg Thomas (DBD), des giveaways et de la folie furieuse pendant 12h ! Frémissant et intense, il est le premier gros événement de la chaine !',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/WQcWVnR76gI',
          },
        },
      },
      {
        color: 'orange',
        year: '25-31/10/2021',
        title: 'Hallowish 2021',
        icon: 'mdi-skull-crossbones',
        text: 'Une semaine de stream horrifique mais de Wish, des bonds à la volée mais surtout de la bonne humeur dans les baskets pour courir encore plus vite !',
      },
      {
        color: 'purple',
        year: '27 novembre 2021',
        title: 'Caritatif event - Arma des dons',
        icon: 'mdi-hand-coin',
        text: 'Evenement caritatif au profit de La ligue contre le cancer. Tout en distanciel, cet évèment aussi intensif qu\'explosif à durer 24h, a rapporter 83240€ à la ligue avec une contribution de notre part de 2622.22€. Notre commu a réellement du talent',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/Jh_-RgkEp2E',
          },
        },
      },
      {
        color: 'red',
        year: '12/2021',
        title: 'Calendrier de l\'avant de TacxTV 2021',
        icon: 'mdi-candycane',
        text: 'Evenement de Noel, plein de surprise et de cadeau pour le bonheur des petits et des grands pendant tout le mois de décembre',
      },
      {
        color: 'blue',
        year: '18/01/2022',
        title: 'Supalanta',
        icon: 'mdi-controller',
        text: 'Du challenge à la compet et de la performance au record, le Supalanta fut un événement où il fallut passer mille épreuves dans mille contrées pour remporter la victoire ! Evenement crée par notre grand SupaPoyo, remake d\'un Koh Lanta pour streameur',
      },
      {
        color: 'blue',
        year: '29/01/2022',
        title: 'Tournoi Fall Guys NikoballZ',
        icon: 'mdi-controller',
        text: 'Petit tournoi implique de grande victoire. Ou pas !',
      },
      {
        color: 'pink',
        year: '05/03/2022',
        title: 'Anniversaire des 1 an',
        icon: 'mdi-cake-variant-outline',
        text: 'Les 1 an de stream, 12h de live en folie avec plein de surprise, de jeu, les amis et la communauté au taquet',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/DNnihiXhe-M',
          },
        },
      },
      {
        color: 'blue',
        year: '24/03/2022',
        title: 'Horror Night by DrLapickouse',
        icon: 'mdi-controller',
        text: 'Une nuit horrifique avec d\'autres streameurs, que demandez de plus ! Au programme et sous vos yeux ébahit, se fut des jeux d\'horreur qui font peur',
      },
      {
        color: 'green',
        year: '04-05/2022',
        title: 'Serveur Minecraft Valandir',
        icon: 'mdi-controller',
        text: 'La grande vallée de Valandir à pointer son nez un jour, dans un monde moddé et raillé pour une expérience de jeu des plus avancés',
      },
      {
        color: 'purple',
        year: '07-15/05/2022',
        title: 'Caritatif event - USPLE',
        icon: 'mdi-hand-coin',
        text: 'Une semaine pour l\'espoir disait t\'il ! Un événement caritatif au profit de Care France qui s\'est déroulé à Paris. 4 jours distanciel et 3 jours présentiel où nous avons contribué de 2023€ à la cagnote et qui a rapporter 71193€ au total à Care France. Comme quoi dans la vie il y a de l\'espoir.',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/8OQG40XqLgM',
          },
        },
      },
      {
        color: 'blue',
        year: '12/06/2022',
        title: 'Tournoi Fall Guys Dworkan',
        icon: 'mdi-controller',
        text: 'Un anniversaire de chaine à la hauteur, on a perdu !',
      },
      {
        color: 'green',
        year: '07-08/2022',
        title: 'Serveur Rust - Rustons Amis',
        icon: 'mdi-controller',
        text: 'Un monde dangereux et hostile où tes amis deviennent tes adversaires, voilà Rustons Amis, le serveur Rust des grands et des moins grands',
      },
      {
        color: 'yellow',
        year: '16-17/07/2022',
        title: 'Twitchcon 2022 - Amsterdam',
        icon: 'mdi-flag-triangle',
        text: 'Dans le port d\'Amsterdam, il y a un Tacx qui chante !',
      },
      {
        color: 'blue',
        year: '04/08/2022',
        title: 'Tournoi FG Keeps',
        icon: 'mdi-controller',
        text: 'TKT c\'est dans la poche, mais TMTC c\'est pas gagné',
      },
      {
        color: 'pink',
        year: 'xx/11/2022',
        title: 'Hallowish 2022',
        icon: 'mdi-halloween',
        text: 'TKT c\'est dans la poche, mais TMTC c\'est pas gagné',
        // youtube: {
        //   iframe: {
        //     src: 'https://www.youtube.com/embed/wjc-BR5YUgc',
        //   },
        // },
      },
      {
        color: 'purple',
        year: '11-13/11/2022',
        title: 'Caritatif event - Téléthon Gaming (partie 1)',
        icon: 'mdi-hand-coin',
        text: 'TKT c\'est dans la poche, mais TMTC c\'est pas gagné',
        youtube: {
          iframe: {
            src: 'https://www.youtube.com/embed/wjc-BR5YUgc',
          },
        },
      },
      {
        color: 'purple',
        year: '02-03/12/2022',
        title: 'Caritatif event - Téléthon Digital (partie 2)',
        icon: 'mdi-hand-coin',
        text: 'La version télévision du Téléthon Gaming !',
      },
    ],
  }),
  mounted() {
    for (const key of this.experiences) {
      this.$set(this.tabs, key, this.tabs[key]++)
    }
  }
}
</script>
