import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import { CustomDrawerItems } from '../index';

import {
  setCurrentOrg,
} from '../../actions/orgActions';

import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class CustomDrawer extends Component {
  static propTypes = {
    myOrgs: PropTypes.array,
    onItemPress: PropTypes.func,
    navigation: PropTypes.object,
  }

  render() {
    const { navigation, onItemPress, myOrgs } = this.props;

    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <CustomDrawerItems
            {...this.props}
            onItemPress={({ route, focused }) => {
              // find the org that has the same name as the route that was clicked
              const newCurrentOrg = myOrgs.filter(org => org.name === route.routeName)[0];
              if (newCurrentOrg) {
                navigation.dispatch(setCurrentOrg(newCurrentOrg));
              }
              onItemPress({ route, focused });
            }}
            orgs={myOrgs}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ org }) => ({
  myOrgs: org.myOrgs,
});

export default connect(mapStateToProps, {})(CustomDrawer);
