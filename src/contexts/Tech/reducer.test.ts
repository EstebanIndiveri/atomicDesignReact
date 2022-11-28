import { reducer } from './reducer';
import ActionCreators from './actions';

const EMPTY_STATE = { tech: '' };

test('setTech action sets the new tech', () => {
  const newTech = 'Angular';
  const newState = reducer(EMPTY_STATE, ActionCreators.setTech(newTech));
  expect(newState).toEqual({ tech: newTech });
});

test('setTech action sets the new tech when there is a tech', () => {
  const initialState = { tech: 'Angular' };
  const newTech = 'Vue';
  const newState = reducer(initialState, ActionCreators.setTech(newTech));
  expect(newState).toEqual({ tech: newTech });
});

test('resetTech action removes the tech', () => {
  const initialState = { tech: 'Svelte' };
  const newState = reducer(initialState, ActionCreators.resetTech());
  expect(newState).toEqual({ tech: '' });
});
