import React from 'react';

const TodoItem = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}><label><input type="checkbox"/>{item}</label></li>)
    }
  </ul>
);

export default TodoItem;