import React from 'react';
import {createAppContainer} from "react-navigation";
import {Provider} from 'react-redux';
import store from './store';
import navigator from './navigation';

const appContainer = createAppContainer(navigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {appContainer}
      </Provider>
    )
  }
}

export default App;
