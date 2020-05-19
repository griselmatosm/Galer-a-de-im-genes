import React from 'react';
import { Provider } from 'react-redux';
import './styles/App.scss';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
