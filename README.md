# `svelte-css-vars`

> Ever wanted to have reactive css variables in svelte?
> What if I tell there's a way?

`svelte-css-vars` exposes a [svelte action](https://svelte.dev/docs#use_action) which receives an object of properties that should be treated as css custom properties. By defining this object inside a `$:{}` reactive block, `svelte-css-vars` can update those css properties on the fly whenever some of its values change.

## Usage

`import cssVars from 'svelte-css-vars';`

After importing the module, juse define the reactive object of your custom properties:

```js
let some_state_variable = true;

$: styleVars = {
  titleColor: some_state_variable ? 'red' : 'blue',
};
```

And then use the action, passing the object, on the desired element:

```html
<div use:cssVars="{styleVars}">
  <!-- anything here will have access to var(--titleColor) -->
</div>
```

## [Example](https://svelte.dev/repl/7c7dcb35055348f89bf09fa5edde56fb)

```html
<script>
  import cssVars from 'svelte-css-vars';

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
```
