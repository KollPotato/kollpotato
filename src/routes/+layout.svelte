<script lang="ts">
  import "../style.scss";

  import { onMount } from "svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  
  onMount(() => {
    const isDarkTheme = localStorage.theme === "dark";
    const isThemeInLocalStorage = "theme" in localStorage;
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkTheme || (!isThemeInLocalStorage && prefersDarkTheme)) {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  });
</script>

<div class="flex flex-col w-full min-h-full">
  <NavBar/>
  <main class="flex flex-col w-full min-h-full h-full">
    <slot />
  </main>
  <Footer/>
</div>

