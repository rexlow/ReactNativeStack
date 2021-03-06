import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';

//include the action creator here for the SelectionReducer
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex:1, padding: 10}}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    console.log(this.props); //result of connected actions

    const { id, title } = this.props.library;
    const { titleStyle } = styles;

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
//first argument is explicily for mapStateToProps
//second argument is for actions object and return to the component as props
