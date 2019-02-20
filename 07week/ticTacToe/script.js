'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      playerMove: 'X'
    }
  }

  toggle = () => {
    if(this.state.playerMove==='X'){
      this.setState({playerMove: 'O'})
    }else this.setState({playerMove: 'X'})
  }

  render() {
    console.log('this is player change', this.state.playerMove)
    return (
      <div>
        <div className="row">
          <div data-cell="0"></div>
          <div data-cell="1"></div>
          <div data-cell="2"></div>
        </div>
        <button onClick={this.toggle}>test</button>
        <div className="row">
          <div data-cell="3"></div>
          <div data-cell="4"></div>
          <div data-cell="5"></div>
        </div>
        <div className="row">
          <div data-cell="6"></div>
          <div data-cell="7"></div>
          <div data-cell="8"></div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
