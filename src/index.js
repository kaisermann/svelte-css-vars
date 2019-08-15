export default (node, initial_props) => {
  let props_names = new Set(Object.keys(initial_props));

  props_names.forEach(name => {
    node.style.setProperty(`--${name}`, initial_props[name]);
  });

  return {
    update(new_props) {
      const new_props_names = new Set(Object.keys(new_props));

      new_props_names.forEach(name => {
        node.style.setProperty(`--${name}`, new_props[name]);
        props_names.delete(name);
      });

      props_names.forEach(name => node.style.removeProperty(`--${name}`));
      props_names = new_props_names;
    },
  };
};
