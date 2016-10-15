import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';

import { connect } from 'react-redux';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.reduxData);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props); //receive props from mapStateToProps
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
  );
  }
}

const mapStateToProps = state => {
  //takes global state object and return as props
  return { reduxData: state.libraries };
};

// first the connect get called,
// it talks to the Provider and asks for state
// then it returns the data, as a props,and give it to LibraryList class
export default connect(mapStateToProps)(LibraryList);
