<script lang="ts">
    export let href: string
    export let active: boolean = false
    export let underlined: boolean = false
</script>

<a {href} class="link" class:active class:underlined>
    <slot/>
</a>

<style lang="scss">
    .link {
        @apply font-medium transition-colors duration-75 relative;
        &.underlined {
            text-decoration: underline 1.75px;
            text-underline-offset: 4px;
        }
    }
</style>