import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';

//include the action creator here for the SelectionReducer
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    console.log(this.props); //result of connected actions
    const { titleStyle } = styles;
    return(
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    )
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(null, actions)(ListItem);
//first argument is explicily for mapStateToProps
//second argument is for actions object and return to the component as props
