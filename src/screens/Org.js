import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import {
  Hamburger,
} from '../components';

import { setCurrentOrg } from '../actions/orgActions';

import Colors from '../config/Colors';
import styles from './styles/Org';


class Org extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    org: PropTypes.object,
    dispatch: PropTypes.func,
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: params ? params.name : 'Placeholder',
      headerLeft: <Hamburger navigation={navigation} />,
      headerStyle: {
        backgroundColor: Colors.$green,
      },
      headerTitleStyle: {
        color: Colors.$white,
      },
    };
  };

  componentDidMount() {
    const { navigation, org } = this.props;

    if (org.currentOrg) navigation.setParams({ name: org.currentOrg.name });
  }

  componentWillReceiveProps(nextProps) {
    const { navigation, org } = this.props;

    if (org.currentOrg !== nextProps.org.currentOrg) {
      navigation.setParams({ name: nextProps.org.currentOrg.name });
    }
  }

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <View style={styles.root} >
        <Button
          title="Set Org1"
          onPress={() => navigation.dispatch(setCurrentOrg({
        name: 'Org 1',
        someOtherStuff: 'Blabla',
      }))}
        />
        <Button
          title="Set Org2"
          onPress={() => navigation.dispatch(setCurrentOrg({
          name: 'Org 2',
          someOtherStuff: 'Wubaluba dub dub',
        }))}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ org }) => ({
  org,
});

export default connect(mapStateToProps)(Org);
