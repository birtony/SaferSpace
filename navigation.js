import {createStackNavigator} from "react-navigation";
import SplashPage from './pages/splash';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import QuizPage from './pages/quiz';
import HomePage from './pages/home';

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
      }
    })
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default navigator;