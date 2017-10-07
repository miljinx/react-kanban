import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanApp from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  boards: [
    { name: 'Todo',  id: 0 },
    { name: 'Doing', id: 1 },
    { name: 'Done',  id: 2 }
  ],
  cards: [
    { id: 0, boardId: 0, title: 'Sample Card A', timestamp: Date.now()},
    { id: 1, boardId: 1, title: 'Sample Card B', timestamp: Date.now()},
    { id: 2, boardId: 2, title: 'Sample Card C', timestamp: Date.now()}
  ]
};

let store = createStore(kanbanApp, initialState);;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
