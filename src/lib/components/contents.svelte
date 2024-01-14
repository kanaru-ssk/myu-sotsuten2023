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
    <div class="scroll-up my-6">
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
  <p class="scroll-up mt-7 text-center">
    <a
      target="_blank"
      rel="noopener"
      href="https://www.myu-design.jp/research/"
      class="site-button relative inline-block overflow-hidden rounded-full bg-primary-500 px-12 py-2 text-base font-bold text-white md:text-xl"
      ><span class="relative z-10">卒展制作集サイトはこちら</span>
    </a>
  </p>
</Section>

<style>
  .site-button::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-50%) scaleX(0);
    transition: all 0.5s;
    background-color: #5fc499;
    z-index: 9;
  }
  .site-button:hover::after {
    transform: translateX(0%) scaleX(1);
  }
</style>
