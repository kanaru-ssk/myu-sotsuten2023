<script lang="ts">
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

  export let data;
</script>

<Canvas />

<Header />
<KeyVisual />
<article class="mx-auto my-16 max-w-3xl space-y-14 px-4 md:space-y-20">
  <Outline />
  <Greeting />
  <Contents contents={data.contents} />
  <Event lecturers={data.lecturers} />
  <Access />
</article>
<Footer />
