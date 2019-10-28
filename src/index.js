import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import "./style.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ item: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        item: '',
      items: [...this.state.items, this.state.item]
    });
  }

  render() {
    return (
      <div id="todoApp">
        <h1>E hana</h1>
        <h3>ToDo:</h3>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.item} onChange={this.onChange} placeholder="what should you do?" className="todoInput"/>
          <button>Add</button>
        </form>
        <TodoItem items={this.state.items} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("index"));