import React from 'react';
import ContextProvider from './components/context/context';

import ToDo from './components/todo/todo';

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <ToDo />
      </ContextProvider>
    );
  }
}
