/* eslint-env jest */

import authReducer from '../../reducers/auth'

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({})
})

test('should log in', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  }

  const state = authReducer({}, action)
  expect(state.uid).toEqual(action.uid)
})

test('should log out', () => {
  const action = {
    type: 'LOGOUT'
  }

  const state = authReducer({ uid: 'abc123' }, action)
  expect(state).toEqual({})
})
