<script lang="ts">
  export let title: string;
  export let subTitle: string;
  export let id: string;
</script>

<section>
  <h2 {id} class="text-primary-500 mb-4 flex flex-col font-kabel font-bold">
    <span class="text-3xl md:text-5xl">{title}</span>
    <span class="text-sm">{subTitle}</span>
  </h2>
  <slot />
</section>
