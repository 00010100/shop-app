import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Layout from 'containers/Layout/Layout';
import Fruits from 'containers/Fruits/Fruits';

@hot(module)
class App extends Component {
  render() {
    return (
      <Layout>
        <Fruits />
      </Layout>
    );
  }
}

export default App;
