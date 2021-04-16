import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import LugaresNavigator from './navegacao/LugaresNavigator';
import contatoReducer from './store/ContatoReducer';

const rootReducer = combineReducers({
  contatos: contatoReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return(
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  );
}
