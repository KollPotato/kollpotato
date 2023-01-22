<script lang="ts">
    export let icon: string
    export let name: string
    export let link: string


    const handleClick = () => {
       open(link)
    }
</script>

<div on:keydown={ handleClick } class="social-card">
    {#if icon}{@html icon}{/if}
    <p class="link" href="{ link }">{ name }</p>
</div>

<style lang="scss">
    .social-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 8px 22px;
        background-color: #272733;
        border-radius: 6px;
        user-select: none;
        cursor: pointer;
    }
    .social-card .link {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;

    }
    .social-card :global(svg) {
        width: 32px;
    }
</style>