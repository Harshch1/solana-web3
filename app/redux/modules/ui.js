import { fromJS } from 'immutable';
import {
  SET_UI
} from 'Actions/actionConstants';

const initialState = {
  color: 'red'
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case SET_UI:
      return state.withMutations((mutableState) => {
        for (const [key, value] of Object.entries(action.payload)) {
          if (value instanceof Array || value instanceof Object) {
            const immutableValue = fromJS(value);
            mutableState
              .set(key, immutableValue)
          } else {
            mutableState
              .set(key, value)
          };
        };
      });
    default:
      return state;
  }
}
