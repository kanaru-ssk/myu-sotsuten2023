<script lang="ts">
  const items = [
    { href: "#outline", text: "Outline" },
    { href: "#greeting", text: "Greeting" },
    { href: "#contents", text: "Contents" },
    { href: "#event", text: "Event" },
    { href: "#access", text: "Access" },
  ];
  let open = false;
</script>

<header class="fixed top-0 z-10 h-16 w-full bg-secondary md:h-20">
  <input
    type="checkbox"
    class="peer ml-auto block h-16 w-16 appearance-none before:absolute before:right-5 before:top-8 before:block before:h-0.5 before:w-7 before:-translate-y-1 before:bg-white before:duration-500 after:absolute after:right-5 after:top-8 after:block after:h-0.5 after:w-7 after:translate-y-1 after:bg-white after:duration-500 checked:before:translate-y-0 checked:before:rotate-45 checked:after:translate-y-0 checked:after:-rotate-45 md:hidden"
    bind:checked={open}
  />

  <nav
    class="pointer-events-none -translate-y-1/2 scale-y-0 bg-secondary pb-5 text-right text-lg font-bold text-white duration-500 peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:scale-y-100 md:pointer-events-auto md:h-full md:transform-none md:pb-0 md:pr-5"
  >
    <ul
      class="flex flex-col md:h-full md:flex-row md:items-center md:justify-end"
    >
      {#each items as { href, text }}
        <li class="mx-5 my-2">
          <a
            {href}
            class="hover:underline"
            on:click={() => {
              open = false;
            }}
          >
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
