import { combineReducers } from 'redux-immutable';
import ui from './modules/ui';
import notification from './modules/notification';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    notification
  });

  return rootReducer;
}
