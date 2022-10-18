<template lang="pug">
  div
    v-img.my-4(src="https://cdn.discordapp.com/attachments/829521148974596148/1031871913921884210/unknown.png" max-width="300px" )
    h2 Hello l’ami,
    div Tu es sur la page d'inscription au projet Télécraft, un projet Minecraft pour l’évènement caritatif du Téléthon Gaming auquel nous participons les 11, 12 et 13 novembre sur la chaîne. Nous avons eu l’idée de créer un serveur Minecraft créatif vanilla disponible à tous pendant les 3 jours de l’évènement afin de créer des constructions, dans le thème ou non de l'événement. Nous te contactons pour savoir si le projet te hype et si tu serais tenté d’y participer ? Plus on est de fou plus on a de constructions, non ?
    br
    br
    v-form(ref="form" v-model="valid" lazy-validation)
      v-text-field(v-model="form.name" label="Pseudo twitch" :rules="[v => !!v || 'requis !']" outlined)
      v-select(v-model="form.streamer" label="Votre streamer" :rules="[v => !!v || 'requis !']" :items="streamers" outlined)
      v-toolbar(color='transparent' flat dense)
        v-spacer
        v-btn(@click="send" text) S'inscrire
        v-spacer
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  data: () => ({
    valid: false,
    form: {
      name: '',
      streamer: '',
      autre: '',
      message: '',
    },
    streamers: ['Autre', 'TacxTV'],
  }),
  methods: {
    async send() {
      if (!this.$refs.form.validate()) return
      try {
        const res = await this.$axios.get('https://api.twitch.tv/helix/users?login=' + this.form.name, {
          headers: {
            'Client-ID': 'os2kmdts5tvcojd34pguyzsn3eyn5q',
            'Authorization': 'Bearer 72g3wgs7dz26acjedt76yic2w38odr',
          }
        })
        if (res.data.data.length === 0) {
          const res = await this.$dialog.notify.error('Pseudo Twitch inconnu', {
            position: 'bottom-right',
            timeout: 5000
          })
          return
        }

        const request = new XMLHttpRequest()
        request.open("POST", 'https://discord.com/api/webhooks/1031854369714491392/pkWpOAXRfEnnOQekM1vmDIE3ISiopukrmgJvy2NMwWVSg-KjtZkyHWKc84TO04Hrhj1i')
        request.setRequestHeader('Content-type', 'application/json')
        request.send(JSON.stringify({
          username: "fr.tacxtv/projects/telethon-minecraft",
          avatar_url: "http://www.telethon85.fr/index.php/organisateurs/logos?download=75:logo-telethon-bonbon",
          content: "Inscription d'un utilisateur via le webhook https://tacxtv.fr/projects/telethon-minecraft",
          embeds: [
            {
              "title": "INSCRIPTION",
              "color": 15258703,
              "thumbnail": {
                "url": "",
              },
              "fields": [
                {
                  "name": "Pseudo",
                  "value": this.form.name,
                  "inline": true
                },
                {
                  "name": "Streamer",
                  "value": this.form.streamer,
                  "inline": true
                },
              ]
            }
          ]
        }))
        const rez = await this.$dialog.notify.success('Inscription en cours de validation', {
          position: 'bottom-right',
          timeout: 5000
        })
      } catch (e) {

      }
    }
  },
  async created() {
    const res = await this.$axios.get('https://api.twitch.tv/helix/teams?id=12892', {
      headers: {
        'Client-ID': 'os2kmdts5tvcojd34pguyzsn3eyn5q',
        'Authorization': 'Bearer 72g3wgs7dz26acjedt76yic2w38odr',
      }
    })
    this.streamers = [...this.streamers, ...res.data.data[0].users.filter(user => user.user_name !== 'TacxTV').map(user => user.user_name)]
  }
}
</script>
