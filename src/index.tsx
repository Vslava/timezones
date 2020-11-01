import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import '../stylesheets';

import App from './components/app';

ReactModal.setAppElement('#app');

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
