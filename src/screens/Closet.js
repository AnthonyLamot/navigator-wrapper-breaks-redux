import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerNavigator, withNavigation } from 'react-navigation';

import {
  CustomDrawer,
} from '../components';

import { OrgStack } from '../config/Routes';
import Colors from '../config/Colors';


const SCREEN_WIDTH = Dimensions.get('window').width;

class Closet extends Component {
  static propTypes = {
    org: PropTypes.object,
  }

  myOrgsToScreens = (myOrgs) => {
    const generatedScreens = {};

    myOrgs.map((org) => {
      generatedScreens[org.name] = {
        screen: OrgStack,
        navigationOptions: {
          drawerLabel: org.name,
        },
      };
    });
    return generatedScreens;
  }

  render() {
    const { org } = this.props;

    const Drawer = new DrawerNavigator(this.myOrgsToScreens(org.myOrgs), {
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

    return <Drawer />;
  }
}

const mapStateToProps = ({ org }) => ({ org });

export default connect(mapStateToProps)(Closet);
