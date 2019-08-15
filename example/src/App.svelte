<script>
  import cssVars from '../../dist/index.es.js';

  let error;

  $: styleVars = {
    color: error ? 'red' : 'blue',
    fontSize: error ? '50px' : '20px',
  };
</script>

<style>
  h1 {
    font-size: var(--fontSize);
    color: var(--color);
  }
</style>

<div use:cssVars={styleVars}>
  <button on:click={() => (error = !error)}>toggle error</button>

  <header>
    <h1>Error: {!!error}</h1>
  </header>
</div>
