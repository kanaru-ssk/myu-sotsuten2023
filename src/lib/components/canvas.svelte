<script>
  import { onMount } from "svelte";

  let loaded = false;
  let loadComp = false;
  onMount(() => {
    const load = document.getElementById("load");
    setTimeout(() => {
      loaded = true;
    }, 2300);
    setTimeout(() => {
      loadComp = true;
    }, 5300);
  });
</script>

<!-- ローディングアニメ―ション -->
<div id="load" class:loaded class:loadComp>
  <div class="load-main">
    <div class="tr tr-1"></div>
    <div class="tr tr-2"></div>
    <div class="tr tr-3"></div>
    <div class="tr tr-4"></div>
    <div class="tr tr-5"></div>
  </div>
  <div class="load-back"></div>
</div>

<style>
  /* ローディング　背景 */
  .load-main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #e26400;
    z-index: 9999;
    transition: all 0.5s;
  }
  #load.loaded .load-main {
    animation: loaded 3s;
  }
  #load.loadComp .load-main,
  #load.loadComp .load-back {
    opacity: 0;
    visibility: hidden;
    z-index: -999;
  }
  .load-back {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #5fc499;
    z-index: 8888;
  }
  #load.loaded .load-back {
    animation: loadedback 3s;
  }
  @keyframes loaded {
    10% {
      transform: translateX(-7%);
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translateX(110%);
      opacity: 0;
    }
  }
  @keyframes loadedback {
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  /* ローディング　折り紙アニメーション */
  .tr {
    background-color: #ccd23a;
    position: fixed;
    height: 60px;
    width: 60px;
  }
  .tr-1 {
    left: calc(50vw + 1px);
    top: calc(50vh + 1px);
    transform-origin: 0% 0%;
    animation: ani1 4s infinite linear;
  }
  .tr-2 {
    left: calc(50vw - 61px);
    top: calc(50vh + 1px);
    transform-origin: 100% 0;
    animation: ani0 4s infinite linear;
  }
  .tr-3 {
    left: calc(50vw - 61px);
    top: calc(50vh - 61px);
    transform-origin: 100% 0;
    animation: ani2 4s infinite linear;
  }
  .tr-4 {
    left: calc(50vw + 1px);
    top: calc(50vh - 61px);
    transform-origin: 0 0;
    animation: ani3 4s infinite linear;
    z-index: 99999;
  }
  .tr-5 {
    left: calc(50vw + 1px);
    top: calc(50vh - 61px);
    background-color: #5fc499;
    transform-origin: 0 0;
    animation: ani4 4s infinite linear;
  }
  @keyframes ani1 {
    9% {
      transform: scaleY(100%);
      background-color: #ccd23a;
    }
    18% {
      transform: scaleY(0%);
      background-color: #9a9e2b;
    }
    36% {
      transform: scaleY(0%);
      background-color: #9a9e2b;
    }
    37% {
      background-color: #469170;
    }
    45% {
      transform: scaleY(100%);
      background-color: #5fc499;
    }
    54% {
      transform: scaleY(100%);
      background-color: #5fc499;
    }
    63% {
      transform: scaleY(0%);
      background-color: #469170;
    }
    81% {
      transform: scaleY(0%);
      background-color: #9a9e2b;
    }
    90% {
      transform: scaleY(100%);
      background-color: #ccd23a;
    }
  }
  @keyframes ani0 {
    0% {
      transform: scaleX(100%);
      background-color: #ccd23a;
    }
    9% {
      transform: scaleX(0%) scaleY(100%);
      background-color: #9a9e2b;
    }
    18% {
      transform: scaleX(0%) scaleY(0%);
    }
    36% {
      transform: scaleX(100%) scaleY(0%);
      background-color: #469170;
    }
    45% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #5fc499;
    }
    54% {
      transform: scaleX(0%) scaleY(100%);
      background-color: #469170;
    }
    63% {
      transform: scaleX(0%) scaleY(0%);
    }
    81% {
      transform: scaleX(100%) scaleY(0%);
      background-color: #9a9e2b;
    }
    90% {
      transform: scaleY(100%);
      background-color: #ccd23a;
    }
  }
  @keyframes ani2 {
    0% {
      transform: scaleX(100%);
      background-color: #ccd23a;
    }
    9% {
      transform: scaleX(0%);
      background-color: #9a9e2b;
    }
    27% {
      transform: scaleX(0%);
      background-color: #469170;
    }
    36% {
      transform: scaleX(100%);
      background-color: #5fc499;
    }
    45% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #5fc499;
    }
    54% {
      transform: scaleX(0%) scaleY(100%);
      background-color: #469170;
    }
    72% {
      transform: scaleX(0%) scaleY(100%);
      background-color: #9a9e2b;
    }
    81% {
      transform: scaleX(100%);
      background-color: #ccd23a;
    }
  }
  @keyframes ani3 {
    18% {
      transform: scaleX(100%);
      background-color: #ccd23a;
    }
    27% {
      transform: scaleX(0%);
      background-color: #9a9e2b;
    }
    36% {
      transform: scaleX(0%) scaleY(100%);
      background-color: #9a9e2b;
    }
    45% {
      transform: scaleX(0%) scaleY(0%);
    }
    54% {
      transform: scaleX(0%) scaleY(0%);
      z-index: 9999;
    }
    62% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #9a9e2b;
    }
    63% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #9a9e2b;
    }
    72% {
      background-color: #ccd23a;
    }
  }
  @keyframes ani4 {
    18% {
      transform: scaleX(100%) scaleY(100%);

      background-color: #469170;
    }
    27% {
      background-color: #5fc499;
    }
    36% {
      background-color: #5fc499;
      z-index: 9999;
    }
    45% {
      z-index: 99999;
      background-color: #5fc499;
    }
    62% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #5fc499;
    }
    63% {
      transform: scaleX(100%) scaleY(100%);
      background-color: #5fc499;
    }
    72% {
      transform: scaleX(0%) scaleY(100%);
      z-index: 99999;
      background-color: #469170;
    }
    90% {
      z-index: 9999;
      transform: scaleX(0%) scaleY(100%);
    }
    99% {
      transform: scaleX(100%) scaleY(100%);
    }
  }
  /* 折り紙アニメーションここまで */
</style>
