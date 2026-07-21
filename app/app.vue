<script setup lang="ts">
import { en, tr } from '@nuxt/ui/locale'

const { t, locale } = useI18n()
const head = useLocaleHead()

// i18n MetaAttrs (loose Record) vs unhead's typed head input
useHead((() => ({
  htmlAttrs: head.value.htmlAttrs,
  meta: head.value.meta,
  link: head.value.link
})) as unknown as Parameters<typeof useHead>[0])

useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})

const title = 'Ahmet Yusuf Başaran — Full-Stack Developer'

useSeoMeta({
  title,
  description: () => t('hero.bio'),
  ogTitle: title,
  ogDescription: () => t('hero.bio'),
  ogImage: 'https://aybasaran.github.io/photo.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :locale="locale === 'tr' ? tr : en">
    <NuxtPage />
  </UApp>
</template>
