<script lang="ts">
  import NavMenu from "./NavMenu.svelte";
  import NavButton from "./NavButton.svelte";
  import ScalingLogo from "./ScalingLogo.svelte";

  let open = false;
</script>

<nav class="relative flex items-center justify-between">
  <ScalingLogo />
  <NavMenu {open} />
  <NavButton bind:open />
</nav>
