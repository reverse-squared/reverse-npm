"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let React;
function LoadReact() {
    if (!React) {
        React = require('react');
    }
}
function hookFromState(state, name = 'ReverseState') {
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
exports.hookFromState = hookFromState;
//# sourceMappingURL=hookFromState.js.map