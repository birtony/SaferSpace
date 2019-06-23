import {createStackNavigator} from "react-navigation";
import LoginPage from './pages/login';

const navigator = createStackNavigator({
  Login: {
    screen: LoginPage
  }
});

export default navigator;