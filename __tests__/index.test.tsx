import {renderHook, act} from 'react-hooks-testing-library'
import EasyState from '../src';
import React, { FunctionComponent } from 'react';

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

const {Provider, getState, getDispatcher} = CounterStore;

test('Counter Sample Test', () => {
  const wrapper: FunctionComponent = ({ children }) => (
    <Provider>{children}</Provider>
  )

  const { result } = renderHook(() => (
    {
      state: getState(),
      dispatch: getDispatcher(),
    }
  ), { wrapper })

  const {dispatch} = result.current;

  act(() => {
    dispatch({action: 'increment', number: 3});
  });

  const {state} = result.current;

  expect(state.count).toBe(3);

});
