import React from 'react';
import {createAppContainer} from "react-navigation";
import {Provider} from 'react-redux';
import store from './store';
import navigator from './navigation';

const AppContainer = createAppContainer(navigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App;
