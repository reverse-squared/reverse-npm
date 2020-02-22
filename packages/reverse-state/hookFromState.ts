import { SimpleState } from './SimpleState';

let React: any;
function LoadReact() {
  if (!React) {
    React = require('react');
  }
}

export function hookFromState<T>(state: SimpleState<T>) {
  LoadReact();
  
  const get = () => state.get;

  function StateHook(): T {
    const [value, setValue] = React.useState(get);

    React.useLayoutEffect(() => {
      function handle(value: T) {
        setValue(() => value);
      }

      state.addListener(handle);
      return () => {
        state.removeListener(handle);
      };
    }, []);

    return value;
  }

  return StateHook;
}
