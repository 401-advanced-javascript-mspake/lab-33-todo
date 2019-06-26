import React from 'react';

import { Context } from '../context/context';


const Count = (props) => {
  return (
  <Context.Consumer>
    {
      (context) => {
        return (
           <h2>There are {context.todoList.length} items in the list</h2>
        );
      }
    }
  </Context.Consumer>
  );
};

export default Count;
