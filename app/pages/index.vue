<script setup lang="ts">
const jobs = [
  {
    key: 'apprecode',
    role: 'Frontend Developer',
    company: 'Apprecode & Bwatech',
    projects: [] as string[]
  },
  {
    key: 'madde22',
    role: 'Backend Developer',
    company: 'Madde22',
    projects: ['Turkcell Trivia Euro 2024', 'Turkcell Ekranım BYS', 'Paraşüt Mikrogroup', 'Deris Hukuk', 'Hillside Beach Club', 'Maksimum Uniq']
  },
  {
    key: 'yuix',
    role: 'Full-Stack Developer',
    company: 'Yuix Networks',
    projects: ['Turkey Tour Organizer', 'Estetic Hair Turkey']
  }
]
</script>

<template>
  <UContainer class="px-8 max-sm:px-6 sm:px-8">
    <SiteHeader />

    <main>
      <section class="flex flex-wrap items-center gap-8 pt-16 pb-14">
        <UAvatar
          src="/photo.png"
          alt="Ahmet Yusuf Başaran"
          class="size-24 border-3 border-(--ui-bg-elevated) shadow-[0_2px_10px_rgba(0,0,0,.14)]"
        />
        <div class="min-w-[min(320px,100%)] flex-1">
          <h1 class="text-[30px] font-extrabold tracking-[-0.02em]">
            Ahmet Yusuf Başaran
          </h1>
          <div class="mt-0.75 text-[15.5px] font-semibold text-primary">
            Full-Stack Developer
          </div>
          <p class="mt-3 max-w-130 text-[14.5px] leading-[1.65] text-muted">
            {{ $t('hero.bio') }}
          </p>
          <div class="mt-4.5 flex flex-wrap items-center gap-2.5">
            <UButton
              to="/cv.pdf"
              external
              download="Ahmet-Yusuf-Basaran-CV.pdf"
              class="rounded-lg bg-primary px-4.25 py-2.25 text-[13.5px] font-semibold text-white hover:bg-[#b45309] active:bg-[#b45309]"
            >
              {{ $t('hero.cv') }} <span aria-hidden="true">↓</span>
            </UButton>
            <UButton
              to="https://github.com/aybasaran"
              target="_blank"
              color="neutral"
              variant="outline"
              class="rounded-lg bg-elevated px-3.75 py-2.25 text-[13.5px] font-semibold text-default ring-accented hover:text-primary"
            >
              GitHub <span aria-hidden="true">↗</span>
            </UButton>
            <UButton
              to="https://linkedin.com/in/aybasaran"
              target="_blank"
              color="neutral"
              variant="outline"
              class="rounded-lg bg-elevated px-3.75 py-2.25 text-[13.5px] font-semibold text-default ring-accented hover:text-primary"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </UButton>
            <span class="text-[13px] text-dimmed"><span aria-hidden="true">◈</span> {{ $t('hero.location') }}</span>
          </div>
        </div>
      </section>

      <section
        id="deneyim"
        class="scroll-mt-6"
      >
        <h2 class="mb-1.5 text-[11px] font-bold tracking-[0.13em] text-dimmed">
          {{ $t('sections.experience') }}
        </h2>
        <article
          v-for="job in jobs"
          :key="job.key"
          class="flex gap-6 border-t border-default py-4.5"
        >
          <div class="w-33 flex-none pt-0.75 text-[12.5px] text-dimmed">
            {{ $t(`jobs.${job.key}.dates`) }}
          </div>
          <div class="flex-1">
            <h3 class="text-[15.5px] font-semibold">
              {{ job.role }} · {{ job.company }}
            </h3>
            <p class="mt-1 text-[13.5px] leading-[1.6] text-muted">
              {{ $t(`jobs.${job.key}.desc`) }}
            </p>
            <div
              v-if="job.projects.length"
              class="mt-2.5 flex flex-wrap gap-1.5"
            >
              <UBadge
                v-for="project in job.projects"
                :key="project"
                color="neutral"
                variant="outline"
                class="rounded-full bg-muted px-2.5 py-1 text-[11.5px] font-normal text-muted ring-default"
              >
                {{ project }}
              </UBadge>
            </div>
          </div>
        </article>
      </section>

      <div class="mt-11 flex flex-wrap gap-12">
        <section class="min-w-65 flex-1">
          <h2 class="mb-3 text-[11px] font-bold tracking-[0.13em] text-dimmed">
            {{ $t('sections.education') }}
          </h2>
          <div class="text-[14.5px] font-semibold">
            {{ $t('education.school') }}
          </div>
          <div class="mt-0.5 text-[13px] text-muted">
            {{ $t('education.degree') }} · 2016 — 2021
          </div>
          <div class="mt-3 text-[14.5px] font-semibold">
            {{ $t('education.highSchool') }}
          </div>
          <div class="mt-0.5 text-[13px] text-muted">
            {{ $t('education.highSchoolDegree') }} · 2011 — 2015
          </div>
        </section>
        <section class="min-w-65 flex-1">
          <h2 class="mb-3 text-[11px] font-bold tracking-[0.13em] text-dimmed">
            {{ $t('sections.languages') }}
          </h2>
          <div class="flex gap-5 text-[13.5px] text-muted">
            <span><b class="font-bold text-default">{{ $t('languages.turkish') }}</b> {{ $t('languages.native') }}</span>
            <span><b class="font-bold text-default">{{ $t('languages.english') }}</b> B2</span>
          </div>
        </section>
      </div>
    </main>

    <footer
      id="iletisim"
      class="mt-14 flex scroll-mt-6 flex-wrap items-center justify-between gap-3 border-t border-default pt-6 pb-8 text-[13px] text-dimmed"
    >
      <ULink
        raw
        to="mailto:aybasaran10@gmail.com"
        class="font-semibold text-muted hover:text-primary"
      >aybasaran10@gmail.com</ULink>
      <div class="flex gap-4.5">
        <ULink
          raw
          to="https://github.com/aybasaran"
          target="_blank"
          class="hover:text-primary"
        >github.com/aybasaran</ULink>
        <ULink
          raw
          to="https://linkedin.com/in/aybasaran"
          target="_blank"
          class="hover:text-primary"
        >in/aybasaran</ULink>
        <ULink
          raw
          to="https://www.instagram.com/aybasaran10"
          target="_blank"
          class="hover:text-primary"
        >@aybasaran</ULink>
      </div>
    </footer>
  </UContainer>
</template>
