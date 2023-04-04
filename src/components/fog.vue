<template lang="pug">
div.absolute.top-0.left-0.right-0.bottom-0
    .fog#foglayer_01
      .image01
      .image02
    .fog#foglayer_02
      .image01
      .image02
    .fog#foglayer_03
      .image01
      .image02
</template>

<style lang="sass">
#foglayer_01, #foglayer_02, #foglayer_03
  width: 200%
  position: absolute
  height: 100%

#foglayer_01 .image01, #foglayer_01 .image02,
#foglayer_02 .image01, #foglayer_02 .image02,
#foglayer_03 .image01, #foglayer_03 .image02
  float: left
  height: 100%
  width: 50%

#foglayer_01
  animation: foglayer_01_opacity 20s linear infinite, foglayer_moveme 25s linear infinite

#foglayer_02, #foglayer_03
  animation: foglayer_02_opacity 41s linear infinite, foglayer_moveme 23s linear infinite

#foglayer_01 .image01, #foglayer_01 .image02
  background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat transparent

#foglayer_02 .image01, #foglayer_02 .image02,
#foglayer_03 .image01, #foglayer_03 .image02
  background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat transparent

@keyframes foglayer_01_opacity
  0%
    opacity: .1
  22%
    opacity: .4
  40%
    opacity: .28
  58%
    opacity: .3
  80%
    opacity: .16
  100%
    opacity: .1

@keyframes foglayer_02_opacity
  0%
    opacity: .4
  25%
    opacity: .2
  50%
    opacity: .1
  80%
    opacity: .3
  100%
    opacity: .4

@keyframes foglayer_03_opacity
  0%
    opacity: .5
  27%
    opacity: .2
  52%
    opacity: .4
  68%
    opacity: .3
  100%
    opacity: .5

@keyframes foglayer_moveme
  0%
    left: 0
  100%
    left: -100%
</style>
