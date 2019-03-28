import {renderHook, act} from 'react-hooks-testing-library'
import EasyState from '../src';
import React, { FunctionComponent } from 'react';

const CounterStore = EasyState({
  state: {
    count: 0
  },
  actions: {
    increment(state, payload: {num: number}) {
      return {
        count: state.count + payload.num
      }
    }
  }
});

const {Provider, getState, getDispatch} = CounterStore;

test('Counter Sample Test', () => {
  const wrapper: FunctionComponent = ({ children }) => (
    <Provider>{children}</Provider>
  )

  const { result } = renderHook(() => (
    {
      state: getState(),
      dispatch: getDispatch(),
    }
  ), { wrapper })

  const {dispatch} = result.current;

  act(() => {
    dispatch({type: 'increment', num: 3});
  });

  const {state} = result.current;

  expect(state.count).toBe(3);

});
