<script>
  import Project from "$lib/components/Project.svelte";
  import projects from "$lib/projects";
</script>

<svelte:head>
  <title>Portfolio</title>
  <meta name="description" content="View Koll Potato's portfolio" />
</svelte:head>

<div class="page p-6 w-full mt-12 py-16 h-full grid tiny:px-16 sm:px-24 lg:px-[240px]">
    <div class="w-full">
        <h3 class="text-xl md:text-2xl font-semibold mb-10 text-center">Take a look at the projects I've worked on.</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center w-full">
            {#each projects as project}
                <Project {project}/>
            {/each}
        </div>
    </div>
</div>