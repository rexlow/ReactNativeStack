import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props); //receive props from mapStateToProps
    return;
  }
}

const mapStateToProps = state => {
  //takes global state object and return as props
  return { libraries: state.libraries };
};

// first the connect get called, then it returns with the LibraryList
export default connect(mapStateToProps)(LibraryList);
