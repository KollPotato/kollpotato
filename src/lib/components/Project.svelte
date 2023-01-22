<script lang="ts">
  import Button from "./Button.svelte";

  export let project: Project;
</script>

<div class="project">
  <img draggable={false} class="preview" src={project.preview.url} alt={project.preview.alt} />
  <h5 class="name">{project.name}</h5>
  <p class="description">{project.description}</p>
  <div class="tags">
    {#each project.tags as tag}
      <div class="tag">
        # {tag}
      </div>
    {/each}
  </div>
  <div class="links">
    {#each project.links as { text, href }}
      <Button icon="arrow-right" {href}>{text}</Button>
    {/each}
  </div>
</div>

<style lang="scss">
  .project {
    @apply lg:w-[440px] flex flex-col gap-3;

    .preview {
      @apply w-full rounded-xl aspect-video bg-orange-400;
    }

    .name {
      @apply font-semibold;
    }

    .description {
      @apply font-medium;
    }

    .links {
        @apply flex flex-col md:flex-row gap-4 mt-2;
    }

    .tags {
      @apply flex flex-wrap gap-4;

      .tag {
        @apply px-4 py-2 font-medium select-none text-sm rounded-md outline outline-black dark:outline-white outline-2 text-black dark:text-white;
      }
    }
  }
</style>
