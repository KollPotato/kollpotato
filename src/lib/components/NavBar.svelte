<script lang="ts">
  import type { Icon as IconT } from "./icon";
  import Icon from "./Icon.svelte";
  import { page } from "$app/stores";
  import Link from "./Link.svelte";

  const links: { text: string; href: string }[] = [
    { text: "home", href: "/" },
    { text: "portfolio", href: "/portfolio" },
    { text: "contact", href: "/contact" },
  ];

  const socials: { icon: IconT; href: string }[] = [
    { icon: "github", href: "https://github.com/kollpotato" },
    {
      icon: "stackoverflow",
      href: "https://stackoverflow.com/users/17249411/koll",
    },
    { icon: "discord", href: "https://discord.com/users/635867082751344641" },
  ];

  let isMobileMenuOpen = false;
  let isDarkTheme = false;

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  const toggleTheme = () => {
    isDarkTheme = document.documentElement.classList.contains("dark")

    if (!isDarkTheme) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      return
    }

    localStorage.theme = "light"
    document.documentElement.classList.remove("dark")
  };
</script>

<div class="fixed w-full backdrop-blur-sm">
  <nav class="tiny:flex tiny:flex-row justify-between py-5 px-6 items-center">
    <div class="tiny:hidden relative text-white">
      <button
        class="relative z-50 text-black dark:text-white"
        on:click={toggleMobileMenu}
      >
        <Icon icon={isMobileMenuOpen ? "close" : "menu"} />
      </button>
    </div>

    <div
      class="tiny:hidden fixed flex items-center justify-center flex-col gap-3 {isMobileMenuOpen
        ? 'w-screen h-screen top-0 left-0 bg-white dark:bg-black'
        : ''}"
    >
      <div class="flex flex-col gap-4 w-full p-12">
        {#if isMobileMenuOpen}
          <ul class="flex flex-col gap-4">
            {#each links as { text, href }}
              <li>
                <Link underlined={$page.url.pathname === href} {href}
                  >{text}</Link
                >
              </li>
            {/each}
          </ul>

          <ul class="flex flex-row gap-2">
            <button class="text-black dark:text-white" on:click={toggleTheme}>
              <Icon icon={isDarkTheme ? "moon" : "sun"} />
            </button>
            {#each socials as { icon, href }}
              <li>
                <Link underlined={$page.url.href === href} {href}>
                  <Icon {icon} />
                </Link>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <ul class="hidden tiny:flex flex-row gap-4">
      {#each links as { text, href }}
        <li>
          <Link underlined={$page.url.pathname === href} {href}>{text}</Link>
        </li>
      {/each}
    </ul>

    <ul class="hidden tiny:flex flex-row gap-2 text-black dark:text-white">
      <button class="text-black dark:text-white" on:click={toggleTheme}>
        <Icon icon={isDarkTheme ? "moon" : "sun"} />
      </button>
      {#each socials as { icon, href }}
        <li>
          <Link underlined={$page.url.href === href} {href}>
            <Icon {icon} />
          </Link>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
    nav :global(a) {
        padding: 12px 10px;
    }
</style>