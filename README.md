# EasyState
> Easy state management based on React Context and Hooks

## Example
```javascript
// store.js
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
