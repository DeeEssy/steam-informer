<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app'

const props = defineProps<NuxtLinkProps>()
</script>

<template>
  <NuxtLinkLocale v-bind="{ ...$attrs, ...props }">
    <slot />
  </NuxtLinkLocale>
</template>
