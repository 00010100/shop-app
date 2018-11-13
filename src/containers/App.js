import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Layout from 'containers/Layout/Layout';

@hot(module)
class App extends Component {
  render() {
    return <Layout />;
  }
}

export default App;
