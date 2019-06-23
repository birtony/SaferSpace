import React from 'react';
import {createAppContainer} from "react-navigation";
import * as Font from 'expo-font'
import {Provider} from 'react-redux';
import store from './store';
import navigator from './navigation';

const AppContainer = createAppContainer(navigator);

class App extends React.Component {

  state = {
    fontsLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'avenir': require('./assets/fonts/Avenir-Medium.ttf')
    });
    this.setState({fontsLoaded: true});
  }
  render() {
    return this.state.fontsLoaded ? (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
      ) : null
  }
}

export default App;
