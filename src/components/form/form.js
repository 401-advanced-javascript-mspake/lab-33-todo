import React from 'react';
import { Context } from '../context/context';

export class SingleItemForm extends React.Component {
  static contextType = Context;

  render() {
    return (
      <form onSubmit={this.context.updateItem}>
      <input
        onChange={this.context.handleInputChange}
        id={this.props.item.id}
        complete={this.props.item.complete}
        defaultValue={this.props.item.text}
      />
    </form>
    );
  }
}

class Form extends React.Component {
  static contextType = Context;

  render() {
    return (
      <form onSubmit={this.context.addItem}>
      <input
        placeholder="Add To Do List Item"
        onChange={this.context.handleInputChange}
      />
    </form>
    );
  }
}

export default Form;
