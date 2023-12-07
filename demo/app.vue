<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import 'splitpanes/dist/splitpanes.css'
import './styles/base.css'
import './styles/prose.css'
import './styles/overrides.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.a {
  color: red;
}
</style>

<style scoped lang="postcss">
.a,
.b {
  color: green;
}
</style>

<i18n lang="yaml">
en:
    hello: Hello World
</i18n>
