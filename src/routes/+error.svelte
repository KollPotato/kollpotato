<script>
    import { page } from "$app/stores";
</script>

<div class="center">
    <h1 class="title"><span class="text-primary">{$page.status}</span> error</h1>
    <p class="tip">Hey, stranger! You might be on a wrong page!</p>
</div>


<style>
    .center {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .center .title {
        font-size: 48px;
        font-weight: 700;
    }

    .center .tip {
        font-size: 20px;
    }
</style>