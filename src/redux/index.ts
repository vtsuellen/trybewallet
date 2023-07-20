// configure aqui sua store
// import Cypress from 'cypress';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// declare global {
//   interface Window {
//     Cypress?: Cypress.Cypress;
//     store: ReturnType<typeof createStore>;
//   }
// }

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const newWindow = window as any;
if (newWindow.Cypress) {
  newWindow.store = store;
}

export default store;
