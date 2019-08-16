<script>
  import cssVars from '../../src/index.js';

  export let bg = 'red';
  export let size = '50x50';

  $: [width, height = width] = size.toString().split('x');
  $: styleVars = {
    width: `${width}px`,
    height: `${height}px`,
    bg,
  };
</script>

<style>
  div {
    width: var(--width);
    height: var(--height);
    background: var(--bg);
    border-radius: 50%;
  }
</style>

<div use:cssVars={styleVars} />
