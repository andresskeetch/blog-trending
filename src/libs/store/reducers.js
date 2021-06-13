import { combineReducers } from "redux";

import { reducer as homeReducer } from "domains/home/core/reducers/home.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
