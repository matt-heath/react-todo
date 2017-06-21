var React = require ('react');
var Todo = require ('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to Do</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> //when iterating over an array and generating multiple instances of a component, they need a unique key prop
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

module.exports = TodoList;
