import Immutable from 'immutable';

function makeNewState(mapFunc, obj, deep = true) {
  const newState = mapFunc(obj)
  return (state) => {
    if (deep) {
      return state.mergeDeep(newState)
    }
  }
}

const defaultState = Immutable.Map({
  user: null,
  loading: false
});

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'LOGINING_IN':

    const mergeState = makeNewState(Immutable.Map, {
      user: action.user,
      loading: true
    });

    return state.merge(mergeState(state));
    default:
      return state
  }
}
