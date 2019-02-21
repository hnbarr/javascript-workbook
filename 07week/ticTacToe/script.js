'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
// may have to switch this up or change the type of action. All squares are chainging on click, to the same value.
 toggle = () => {
  if(this.state.value=== null){
    this.setState({value: 'X'})
  } else if(this.state.value === 'X'){
   this.setState({value: 'O'})
  } else this.setState({value: 'X'})
}
 //need to make these separate. they are combining themselves as one click. Squares need to be their own space.
  render() {
    console.log(this.state.value)
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.toggle}> {this.state.value} </div> 
          <div data-cell="1"> {this.state.value} </div>
          <div data-cell="2"> {this.state.value} </div>
        </div>
        <div className="row">
          <div data-cell="3"> {this.state.value} </div>
          <div data-cell="4"> {this.state.value} </div>
          <div data-cell="5"> {this.state.value} </div>
        </div>
        <div className="row">
          <div data-cell="6"> {this.state.value} </div>
          <div data-cell="7"> {this.state.value} </div>
          <div data-cell="8"> {this.state.value} </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));

// onClick=() => this.setState({value: 'X'})