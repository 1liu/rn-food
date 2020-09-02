import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const navigater = createStackNavigator({
  Search: SearchScreen,
},
{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Food"
  }
}
);

export default createAppContainer(navigater);
