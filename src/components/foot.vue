<template lang="pug">
.background-primary.pb-12
    wave(:rotation="180")
    .flex.text-center
      .flex-1
        .text-3xl.mb-3.font-langar Réseaux sociaux
        .flex.place-content-center
          a(href="https://twitch.tv/TacxTV" target="_blank")
            icon.text-5xl(name="ph:twitch-logo-fill")
          a(href="https://twitter.com/TacxTV" target="_blank")
            icon.text-5xl(name="ph:twitter-logo-fill")
          a(href="https://instagram.com/TacxTV" target="_blank")
            icon.text-5xl(name="ph:instagram-logo-fill")
          a(href="https://tiktok.com/@tacxtv" target="_blank")
            icon.text-5xl(name="ph:tiktok-logo-fill")
      .flex-auto
        .text-3xl.mb-3.font-langar Nous contacter
        .flex.place-content-center
          a(href="javascript:;" target="_blank")
            icon.text-5xl(name="ph:envelope-simple-open-bold")
      .flex-1
        .text-3xl.mb-3.font-langar Réseaux sociaux
        ul
          li
            a(href="https://www.twitch.tv/tacx") Twitch
</template>
