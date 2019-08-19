# `svelte-css-vars`

> Ever wanted to have reactive css variables in svelte? What if I told you there's a way?

`svelte-css-vars` exposes a [svelte action](https://svelte.dev/docs#use_action) which receives an object of properties that should be treated as css custom properties. By defining this object inside a `$:{}` reactive block, `svelte-css-vars` can update those css properties on the fly whenever some of its values change.

## Usage

`import cssVars from 'svelte-css-vars';`

After importing the module, just define the reactive object of your custom properties:

```js
let some_state_variable = true;

$: styleVars = {
  titleColor: some_state_variable ? 'red' : 'blue',
};
```

And then use the action, passing the object, on the desired element:

```html
<style>
  div {
    color: var(--titleColor);
  }
</style>

<div use:cssVars="{styleVars}">
  <!-- anything here will have access to var(--titleColor) -->
</div>
```

## [Example](https://svelte.dev/repl/1522fe3bdf904843a01101d9f900241d)

**App.svelte**

```html
<script>
  import Circle from './Circle.svelte';
</script>

<Circle size="80x80" bg="url(https://placekitten.com/80/80) center" />

<Circle
  size={120}
  bg="radial-gradient(circle, #051937, #004d7a, #008793, #00bf72, #a8eb12) "
/>

<Circle
  size={180}
  bg="linear-gradient(45deg, #EE617D 25%, #3D6F8E 25%, #3D6F8E 50%, #EE617D 50%,
  #EE617D 75%, #3D6F8E 75%, #3D6F8E 100%) center / 100% 20px"
/>

<Circle size="250/200" bg="url(https://placekitten.com/250/200) center" />
```

**Circle.svelte**

```html
<script>
  import cssVars from 'svelte-css-vars';

  export let bg = 'black';
  export let size = '50x50';

  $: [width, height = width] = size.toString().split(/[x|\/]/);
  $: styleVars = {
    width: `${width}px`,
    height: `${height}px`,
    bg,
  };
</script>

<style>
  div {
    display: inline-block;
    width: var(--width);
    height: var(--height);
    background: var(--bg);
    border-radius: 50%;
  }
</style>

<div use:cssVars="{styleVars}" />
```
