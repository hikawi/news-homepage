<script lang="ts">
  import NavLinks from "./NavLinks.svelte";

  export let open = false;

  $: opacityClass = open ? "opacity-100" : "opacity-0";
  $: animationClass = open ? "translate-x-0" : "translate-x-full";
</script>

<!-- The sidebar thing for mobile devices -->
<!-- There's a background overlay to "black out" the other content when the menu bar is in view -->
<div
  class="fixed left-0 top-0 z-0 flex h-full w-full flex-row justify-end overflow-x-hidden bg-black bg-opacity-50 lg:hidden {opacityClass} transition-opacity motion-reduce:duration-0"
>
  <div
    class="z-10 flex h-full w-64 flex-col gap-6 bg-white px-6 py-36 text-lg transition-transform duration-200 {animationClass} motion-reduce:duration-0"
  >
    <NavLinks />
  </div>
</div>

<!-- Full fledged nav bar for desktop devices -->
<div class="hidden flex-row justify-between gap-10 lg:flex">
  <NavLinks />
</div>
