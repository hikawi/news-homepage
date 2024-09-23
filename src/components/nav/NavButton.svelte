<script lang="ts">
  import IconMenu from "../icons/IconMenu.svelte";

  export let open = false;
</script>

<button
  on:click={() => (open = !open)}
  class="absolute right-0 top-0 lg:hidden"
  aria-label={open ? "Close menu" : "Open menu"}
>
  <IconMenu {open} />
</button>
