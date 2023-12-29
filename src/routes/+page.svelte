<script lang="ts">
  import "../app.css";
  import { Canvas, Exhibitor, Section } from "$lib/components";
  export let data;
</script>

<Canvas />

<article class="mx-auto max-w-3xl space-y-14 px-4 md:space-y-20">
  <Section title="Outline" subTitle="開催概要">
    <div class="mb-4 text-xl">
      <p>宮城大学 事業構想学群</p>
      <p>生活環境・感性情報デザインコース</p>
      <p>空間デザインコース・メディアデザインコース</p>
      <p>卒業研究・制作展＋大学院事業構想学研究科修士制作展</p>
    </div>
    <div class="text-sm">
      <p>場所 | 宮城大学大和キャンパス デザイン研究棟ほか</p>
      <p>日時 | 2022年2月18日(金) - 20日(日) 10:00 ~ 19:00</p>
      <p>入場料金 | 無料</p>
    </div>
  </Section>

  <Section title="Greeting" subTitle="開催にあたって"></Section>

  <Section title="Contents" subTitle="展示研究室">
    {#each data.contents as course}
      <div>
        <h3>{course.name}</h3>
        {#each course.labs as lab}
          <div>
            <h4 class="font-bold">{lab.name}</h4>
            <div class="space-x-4 space-x-reverse">
              {#each lab.members as member}
                <Exhibitor data={member} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </Section>

  <Section title="Event" subTitle="イベント">
    {#each data.lecturers as lecturer}
      <div>{lecturer.name}</div>
    {/each}
  </Section>

  <Section title="Access" subTitle="アクセス"></Section>
</article>
