<script lang="ts">
  import Section from "./section.svelte";

  export let contents: {
    name: string;
    labs: {
      members: {
        number: number;
        name: string;
        lab: string;
      }[];
      id: string;
      name: string;
      course: string;
    }[];
  }[];
</script>

<Section title="Contents" subTitle="展示研究室" id="contents">
  {#each contents as course}
    <div>
      <h3 class="text-base font-bold md:text-2xl">{course.name}</h3>
      {#each course.labs as lab}
        <div class="my-4">
          <h4 class="font-bold">{lab.name}</h4>
          <div class="space-x-4 space-x-reverse">
            {#each lab.members as member}
              <span class="mr-4 inline-block">{member.name}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</Section>
