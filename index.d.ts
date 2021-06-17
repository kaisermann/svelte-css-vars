declare module 'svelte-css-vars' {
  export function update(new_props: Record<string, any>);

  function apply(node: ElementCSSInlineStyle, props: Record<string, any>);

  export default apply;
}
