<script lang="ts">
  export let title: string;
  export let subTitle: string;
</script>

<section>
  <h2 class="mb-4 flex flex-col font-bold text-red-500">
    <span class="text-3xl md:text-5xl">{title}</span>
    <span class="text-sm">{subTitle}</span>
  </h2>
  <slot />
</section>
