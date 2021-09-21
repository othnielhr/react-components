var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    done: false
  };
}
onListItemClick() {
  this.setState({
    done: !this.state.done
  });
}
render() {
  var style = {
    fontWeight: this.state.done ? 'bold' : 'normal'
  };
  return (
    <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>
    );
  }
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList list={['Tomatoes', 'Bananas', 'Watermelons']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));