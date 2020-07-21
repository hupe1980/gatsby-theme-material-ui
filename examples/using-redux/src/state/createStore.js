import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};

const initialState = { count: 0 };

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
