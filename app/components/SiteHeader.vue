<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <header class="flex items-center justify-between border-b border-default py-4.5">
    <ULink
      raw
      href="#"
      class="text-[15px] font-bold hover:text-primary"
    >ayb<span class="text-primary">.</span></ULink>
    <nav class="flex flex-wrap items-center justify-end gap-5.5 text-[13.5px] text-muted max-sm:gap-3">
      <ULink
        raw
        href="#deneyim"
        class="hover:text-primary"
      >{{ $t('nav.experience') }}</ULink>
      <ULink
        raw
        href="#yetenekler"
        class="hover:text-primary"
      >{{ $t('nav.skills') }}</ULink>
      <ULink
        raw
        href="#iletisim"
        class="hover:text-primary"
      >{{ $t('nav.contact') }}</ULink>
      <div
        role="group"
        :aria-label="$t('langLabel')"
        class="flex gap-0.5 rounded-[7px] border border-accented p-0.5 text-[11.5px] font-bold"
      >
        <UButton
          v-for="l in ['tr', 'en'] as const"
          :key="l"
          color="neutral"
          variant="ghost"
          class="cursor-pointer rounded-[5px] px-2.25 py-0.75 text-[11.5px] font-bold"
          :class="locale === l ? 'bg-inverted text-inverted hover:bg-inverted active:bg-inverted' : 'text-dimmed hover:bg-transparent hover:text-dimmed active:bg-transparent'"
          :aria-pressed="locale === l"
          @click="setLocale(l)"
        >
          {{ l.toUpperCase() }}
        </UButton>
      </div>
      <UColorModeButton
        variant="outline"
        :title="$t('theme')"
        class="size-7 justify-center rounded-[7px] bg-transparent text-muted hover:bg-transparent active:bg-transparent"
        :ui="{ leadingIcon: 'size-3.5' }"
      />
    </nav>
  </header>
</template>
