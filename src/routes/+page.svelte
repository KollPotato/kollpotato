<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { inview } from "svelte-inview";

  let prefersDarkMode = false;

  onMount(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      prefersDarkMode = true;
    }
  });

  let aboutMe: HTMLElement
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Koll Potato's webiste" />
</svelte:head>

<div
  class="p-6 w-full h-full grid place-items-center tiny:px-16 sm:px-24 lg:px-[480px]"
>
  <div class="flex mt-24 md:mt-44 flex-col gap-8 w-fit">
    <div class="flex flex-col gap-2 md:gap-3">
      <h3
        use:inview
        on:enter={({ target }) => {
          gsap.to(target, {
            duration: 50,
            opacity: 100,
          });
        }}
        class="tiny:text-2xl text-xl font-medium opacity-0"
      >
        Hi, I'm Koll.
      </h3>
      <h1
      use:inview
      on:enter={({ target }) => {
        gsap.to(target, {
          duration: 50,
          opacity: 100,
          delay: 0.5
        })
      }}
      
      class="md:text-6xl sm:text-5xl tiny:text-4xl text-3xl font-bold opacity-0">
        I create engaging web solutions
      </h1>
      <h4
      use:inview
      on:enter={({ target }) => {
        gsap.to(target, {
          duration: 50,
          opacity: 100,
          delay: 1
        })
      }}

      class="tiny:text-xl text-base font-medium opacity-0">
        I am a full-stack web developer from Latvia.
      </h4>
    </div>
    <div
    use:inview
    on:enter={({ target }) => {
      gsap.to(target, {
        duration: 50,
        opacity: 100,
        delay: 1.5
      })
    }}
    
    class="flex flex-col tiny:flex-row gap-4 opacity-0">
      <Button href="/portfolio" icon="arrow-right">View portfolio</Button>
      <Button href="/contact">Contact me</Button>
    </div>
  </div>
</div>

<div
  class="p-6 flex-col lg:px-48 lg:flex-row gap-10 pb-24 lg:gap-32 mt-32 flex items-center"
>
  <div class="flex flex-col gap-3">
    <h3 class="font-semibold">About me</h3>
    <h5 class="tiny:text-lg text-base">
      I am a 14-year-old full-stack web developer based in Riga, Latvia. I
      mainly work with TypeScript, SvelteKit, and Python.
    </h5>
    <h5 class="tiny:text-lg text-base">
      I find programming to be endlessly fun because of the countless
      opportunities it gives to me.
    </h5>
  </div>
  <img
    class="rounded-2xl about-me-image"
    width="400px"
    src={"/assets/images/space-monochrome.jpg"}
    alt="space monochrome"
  />
</div>
