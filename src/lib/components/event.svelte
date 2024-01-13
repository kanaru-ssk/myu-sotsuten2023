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
  <h3 class="my-4 text-2xl font-bold">卒業制作自主レビュー</h3>
  <p class="my-2">
    大学外部からゲスト講師を招き、学生による自主レビューを開催します。
  </p>
  <p>場所 | せんだいメディアテーク（卒展会場）</p>
  <p>日時 | 2024年2月10日(土) 12:00-18:00</p>
  <p>主催 | 宮城大学 事業構想学群 価値創造デザイン学類</p>
  <h3 class="my-4 text-2xl font-bold">講師プロフィール</h3>
  <ul class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
    {#each lecturers as lecturer}
      <li class="space-y-4 border-4 border-primary-500 bg-white p-4">
        <div class="flex justify-between space-x-4">
          <div class="space-y-1">
            <p class="text-xs">{lecturer.roman}</p>
            <p class="text-xl font-bold">{lecturer.name}</p>
            <p class="text-xs">{lecturer.belongs}</p>
          </div>
          <img
            src={`./lecturers/${lecturer.img_name}`}
            alt="講師プロフィール画像"
          />
        </div>
        <p class="leading-6">{lecturer.position} {lecturer.career}</p>
      </li>
    {/each}
  </ul>
</Section>
