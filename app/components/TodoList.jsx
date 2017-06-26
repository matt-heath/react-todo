var React = require ('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if (filterTodos.length === 0 ) {
        return (
          <p className="container__message">Nothing to Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/> //when iterating over an array and generating multiple instances of a component, they need a unique key prop
          //... Spread operator allows you to 'spread out' all properties within an object and pass them down as props
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
