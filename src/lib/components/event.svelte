<script lang="ts">
  import Section from "./section.svelte";

  export let lecturers: {
    name: string;
    roman: string;
    belongs: string;
    position: string;
    career: string;
    img_name: string;
  }[];
</script>

<Section title="Event" subTitle="イベント" id="event">
  {#each lecturers as lecturer}
    <div>{lecturer.name}</div>
  {/each}
</Section>
