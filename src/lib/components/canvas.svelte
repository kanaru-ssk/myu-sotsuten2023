<script>
  import { onMount } from "svelte";

  let canvas;

  onMount(() => {
    // const ctx = canvas.getContext("2d");
    // if (!ctx) return;
    // const width = canvas.width;
    // const height = canvas.height;
    // let r = 0;
    // (function loop() {
    //   ctx.clearRect(0, 0, width, height);
    //   r += 0.01;
    //   ctx.save();
    //   ctx.translate(width / 2, height / 2);
    //   ctx.rotate(r);
    //   ctx.fillStyle = "#5EB9D7";
    //   ctx.fillRect(-200, -200, 400, 400);
    //   ctx.restore();
    //   requestAnimationFrame(loop);
    // })();
  });
</script>

<canvas
  bind:this={canvas}
  width={2560}
  height={1600}
  class="fixed -z-10 h-svh w-screen"
/>
