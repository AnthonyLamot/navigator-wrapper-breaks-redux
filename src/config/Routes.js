import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Org from './../screens/Org';
import Closet from './../screens/Closet';

import { CustomDrawer } from '../components';

import Colors from '../config/Colors';


const SCREEN_WIDTH = Dimensions.get('window').width;


export const OrgStack = new StackNavigator({
  Org: {
    screen: Org,
  },
});

// These are routes for logged-in users and will be passed to Routes
export const UserDrawer = new DrawerNavigator({
  'Org 1': {
    screen: OrgStack,
    navigationOptions: {
      drawerLabel: 'Static Org 1',
    },
  },
  'Org 2': {
    screen: OrgStack,
    navigationOptions: {
      drawerLabel: 'Static Org 2',
    },
  },
}, {
  drawerWidth: SCREEN_WIDTH * 0.6,
  contentComponent: CustomDrawer,
  contentOptions: {
    activeTintColor: Colors.$white,
    inactiveTintColor: Colors.$white,
    activeBackgroundColor: Colors.$blue,
    iconContainerStyle: {
      marginRight: -10,
    },
  },
  drawerBackgroundColor: Colors.$green,
});

// These are the hightest level of routes
const Routes = new StackNavigator({
  UserRoutes: {
    // You can also pass the UserDrawer as a screen if you like to
    // test and see that static routes DO work
    screen: Closet,
  },
// more would be added here
}, {
  headerMode: 'none',
});

export default Routes;
