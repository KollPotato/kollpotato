<script lang="ts">
  import type { Icon as IconT } from "./icon";
  import Icon from "./Icon.svelte";

  export let icon: IconT | null = null;
  export let href: string | null = null;
  export let type: "submit" | null = null
</script>

<svelte:element
  this={href != null ? "a" : "button"}
  on:click
  on:keypress
  {href}
  {type}
  class="button"
>
  <span>
    <slot />
  </span>
  {#if icon != null}
    <Icon {icon} />
  {/if}
</svelte:element>
