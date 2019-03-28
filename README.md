# EasyState
> Easy state management based on React Context and Hooks

[![npm package][npm-badge]][npm]

## Install
```bash
npm install @menthays/easystate
```

## Example
```javascript
// store.js
import EasyState from '@menthays/easystate'
const CounterStore = EasyState({
  state: {
    count: 0
  },
  actions: {
    increment(state, {number}) {
      return {
        count: state.count + number
      }
    }
  }
});

export default CounterStore
```

```jsx
// component
import CounterStore from 'path/to/store.js'
const {Provider, getState, getDispatcher} = CounterStore;

function CounterComponent() {
  const state = getState();
  const dispatch = getDispatcher();
  return (
    <Provider>
      <div onClick={() => dispatch('increment', {number: 3})}>Increment</div>
      <div>{state.count}</div>
    </Provider>
  )
}

```

[npm-badge]: https://img.shields.io/npm/v/easystate.png?style=flat-square
[npm]: https://www.npmjs.org/package/easystate
