let React;
function LoadReact() {
  if (!React) {
    React = require('react');
  }
}

export function hookFromState(state, name: string = 'ReverseState') {
  LoadReact();

  function StateHook() {
    const [value, setValue] = React.useState(state.get);

    React.useLayoutEffect(() => {
      function handle(value) {
        setValue(() => value);
      }

      state.addListener(handle);
      return () => {
        state.removeListener(handle);
      };
    }, []);

    return value;
  }
  StateHook.name = 'use' + name;

  return StateHook;
}
