const authRecucerDefaultState = {}

export default (state = authRecucerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
