import {createStackNavigator} from "react-navigation";
import SplashPage from './pages/splash';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import QuizPage from './pages/quiz';
import HomePage from './pages/home';
import MapPage from './pages/map';

const navigator = createStackNavigator({
  Init: {
    screen: createStackNavigator({
      Splash: {
        screen: SplashPage
      },
      Login: {
        screen: LoginPage
      },
      SignUp: {
        screen: SignUpPage
      },
      Quiz: {
        screen: QuizPage
      }
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    })
  },
  Main: {
    screen: createStackNavigator({
      Home: {
        screen: HomePage
      },
      Map: {
        screen: MapPage
      }
    },
      {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }})
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default navigator;