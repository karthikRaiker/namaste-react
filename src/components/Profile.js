import React from "react";
import Button from "./Button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todo: [],
      text: "",
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  handleReset = () => this.setState({ count: 0 });

  addTodo = () => {
    const { todo, text } = this.state;
    this.setState({
      todo: [...todo, { id: new Date(), item: text }],
      text: "",
    });
  };

  componentDidMount() {
    //APIs Need to call here
    console.log(
      "This is componentDidMount => this will trigger after render is called"
    );
  }

  render() {
    const { name } = this.props;
    const { count, text, todo } = this.state;
    return (
      <React.Fragment>
        <div>count = {count}</div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <Button
            style={{ cursor: "pointer", backgroundColor: "green" }}
            controler={this.handleIncrement}
          >
            Increment Count
          </Button>
          <Button
            style={{ cursor: "pointer", backgroundColor: "red" }}
            controler={this.handleDecrement}
          >
            Decrement Count
          </Button>
          <Button controler={this.handleReset}>Reset Count</Button>
          <input
            type="text"
            value={text}
            onChange={(e) => this.setState({ text: e.target.value })}
            placeholder="Enter todo"
          />
          <Button
            style={{
              cursor: "pointer",
              backgroundColor: "green",
              color: "white",
            }}
            controler={this.addTodo}
          >
            Add todo
          </Button>
          <ul>
            {todo.length > 0 &&
              todo.map((todoItem) => <li>{todoItem.item}</li>)}
          </ul>
        </div>
        <div>name = {name}</div>
      </React.Fragment>
    );
  }
}

export default Profile;
