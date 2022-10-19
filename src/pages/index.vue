<template lang="pug">
  span Accueil
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  name: 'IndexPage',
  middleware: async (context) => {
    context.redirect('/stream')
    // try {
    //   // noinspection JSUnresolvedVariable
    //   if (context.query.noredirect) return
    //   const res = await context.$axios.get('https://api.twitch.tv/helix/streams', {
    //     headers: {
    //       'Client-ID': 'os2kmdts5tvcojd34pguyzsn3eyn5q',
    //       'Authorization': 'Bearer 72g3wgs7dz26acjedt76yic2w38odr',
    //     },
    //     params: {
    //       user_login: 'tacxtv',
    //     },
    //   })
    //   if (res.data.data.length > 0 && res.data.data[0].type === 'live') {
    //     context.redirect('/stream')
    //   }
    // } catch (e) {
    //   console.error(e)
    // }
  },
}
</script>
