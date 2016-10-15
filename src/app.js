import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

import Header from './components/common/Header';

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Redux Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
