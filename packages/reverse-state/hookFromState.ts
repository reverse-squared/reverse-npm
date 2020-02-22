import { SimpleState } from './SimpleState';

let React: any;
function LoadReact() {
  if (!React) {
    React = require('react');
  }
}

export function hookFromState<Type>(state: SimpleState<Type>, name: string = 'ReverseState') {
  LoadReact();
  
  const get = () => state.get;

  function StateHook(): Type {
    const [value, setValue] = React.useState(get);

    React.useLayoutEffect(() => {
      function handle(value: Type) {
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
