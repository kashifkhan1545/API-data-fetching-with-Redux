// src/store/index.tsx
import { createStore, applyMiddleware, Store, AnyAction, Reducer, compose, Middleware, Dispatch } from 'redux';
import thunk, { ThunkDispatch as OriginalThunkDispatch, ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from '../reducers';

const composeEnhancers =
  (global as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

// Create a custom middleware function for redux-thunk
const createThunkMiddleware = () => {
  const middleware: Middleware<{}, RootState, Dispatch<AnyAction>> = (api) => (next) => (action) => {
    if (typeof action === 'function') {
      return (action as ThunkDispatch)(api.dispatch, api.getState);
    }
    return next(action);
  };

  return middleware;
};

type ThunkDispatch = OriginalThunkDispatch<RootState, undefined, AnyAction>;

// Apply the custom thunk middleware
const thunkMiddleware = createThunkMiddleware();

const store: Store<RootState, AnyAction> & {
  dispatch: ThunkDispatch;
} = createStore<RootState, AnyAction, {}, {}>(
  rootReducer as Reducer<RootState, AnyAction>,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
