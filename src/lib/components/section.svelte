<script lang="ts">
  export let title: string;
  export let subTitle: string;
  export let id: string;
</script>

<section>
  <div class="relative">
    <div class="scroll_left">
      <h2 {id} class="mb-4 flex flex-col font-kabel font-bold text-primary-500">
        <span class="text-3xl md:text-5xl">{title}</span>
        <span class="text-sm">{subTitle}</span>
      </h2>
    </div>
  </div>
  <slot />
</section>
