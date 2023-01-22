<script lang="ts">
  import { getIcon, type Icon } from "./icon";

  export let icon: Icon;
</script>

<div {...$$restProps} on:click on:keypress class="icon">
  {@html getIcon(icon)}
</div>
