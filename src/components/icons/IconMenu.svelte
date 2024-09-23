<script lang="ts">
  export let open = false;

  $: animationClass = open ? "open" : "closed";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 40 17"
  fill="none"
  class="{animationClass} z-10"
>
  <rect width="40" height="3" fill="#00001A" class="upper" />
  <rect y="7" width="40" height="3" fill="#00001A" class="middle-1" />
  <rect y="7" width="40" height="3" fill="#00001A" class="middle-2" />
  <rect y="14" width="40" height="3" fill="#00001A" class="lower" />
</svg>

<style lang="sass">
  svg, .upper, .middle-1, .middle-2, .lower
    transition: all 0.2s ease

  .closed
    width: 40px
    height: 17px 

  .open
    width: 32px
    height: 32px

    .upper, .lower
      opacity: 0
      transition: all 0.1s ease

    .middle-1
      rotate: 45deg
      transform-box: fill-box
      transform-origin: 50% 50%

    .middle-2
      rotate: -45deg
      transform-box: fill-box
      transform-origin: 50% 50%
</style>
