<script lang="ts">
    import { onMount } from "svelte";

    export let text: string;
    export let path: string;
    export let active: boolean = false;

    let link: string | null = null;

    onMount(() => {
        link = `${location.origin}/${path}`;
        if (location.pathname.replace(/\/$/, "") == path) {
            active = true;
            return;
        }
        active = false;
    });
</script>

{#if active}
    <a class="item active" href={link}>{text}</a>
{:else}
    <a class="item" href={link}>{text}</a>
{/if}

<style>
    .item {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: white;
    }

    .item.active {
        color: #FF7840;
    }

    @supports (background-clip: text) {
        .item {
            background-image: linear-gradient(60deg, #e21143, #ffb03a);
            background-clip: text;
            color: transparent;
        }
    }
</style>
