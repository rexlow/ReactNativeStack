import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';

class ListItem extends Component {
  render() {
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

export default ListItem;
