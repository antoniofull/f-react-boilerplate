import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = (MainComponent) => {
  ReactDOM.render(
    <AppContainer>
      <MainComponent />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// Render App first Time
render(App);

// Enable Hot Reloading
if (module.hot) {
  module.hot.accept(() => {
    render(App);
  });
}
