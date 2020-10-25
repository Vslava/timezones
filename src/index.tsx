import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../stylesheets';

import Layout from './components/layout';
import Timezones from './components/timezones';

ReactDOM.render(
  <Layout>
    <Timezones
      zoneNames={[
        'Asia/Krasnoyarsk',
        'Europe/Moscow',
      ]}
    />
  </Layout>,
  document.getElementById('app'),
);
