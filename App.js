import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import LugaresNavigator from './navegacao/LugaresNavigator';
import contatoReducer from './store/ContatoReducer';
import { init } from './helpers/db';

init().then(() => {
  console.log("Criação da base ocorreu com sucesso.");
}).catch((err) => {
  console.log('Criação da base falhou.');
  console.log(err);
});

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
