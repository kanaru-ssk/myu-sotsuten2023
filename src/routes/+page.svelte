<script lang="ts">
  import { onMount } from "svelte";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import "../app.css";
  import {
    Access,
    Canvas,
    Contents,
    Event,
    Footer,
    Greeting,
    Header,
    KeyVisual,
    Outline,
  } from "$lib/components";

  onMount(() => {
    const scrollAnimationElm = document.querySelectorAll(
      ".scroll-up, .scroll-left",
    );
    function addClassOnAnimationTriggered() {
      for (let i = 0; i < scrollAnimationElm.length; i++) {
        // 要素がフェードインするタイミング
        const triggerMargin = 100;
        if (
          window.innerHeight >
          scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
        ) {
          scrollAnimationElm[i].classList.add("on");
        }
      }
    }
    addClassOnAnimationTriggered();
    window.addEventListener("scroll", addClassOnAnimationTriggered);
  });

  export let data;

  const title = "宮城大学 2023年度 卒業研究・制作展";
  const description =
    "2023年度 宮城大学 事業構想学群 価値創造デザイン学類 卒業研究・制作展 + 宮城大学院 事業構想学研究科 修士 制作展";
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={PUBLIC_BASE_URL} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${PUBLIC_BASE_URL}/ogp.png`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="宮城大学 デザインポータル" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Canvas />

<Header />
<KeyVisual />
<div
  class="h-20 bg-gradient-to-b from-primary-400 to-primary-100 md:h-56"
></div>
<article class="mx-auto my-16 max-w-3xl space-y-14 px-4 md:space-y-20">
  <Outline />
  <Greeting />
  <Contents contents={data.contents} />
  <Event lecturers={data.lecturers} />
  <Access />
</article>
<Footer />
