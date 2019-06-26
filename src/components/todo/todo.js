import React from 'react';
import Counter from '../counter/counter';
import Form from '../form/form';
import List from '../list/list';

import { Context } from '../context/context';

import './todo.scss';

class ToDo extends React.Component {
  static contextType = Context;

  render() {
    return (
      <>
        <section className="todo">
          <div>
            <Counter />
          </div>

          <div>
            <Form />
          </div>

          <div>
            <List />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
