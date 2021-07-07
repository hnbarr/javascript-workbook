'use strict';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      value: true,
    }
  }
  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
      onClick={() => this.makeMove(i)}
      />
    )
  }
  makeMove(i) {
    const squares = this.state.squares.slice();

    if( checkForWin(squares) || squares[i] ) return;

    squares[i] = this.state.value ? 'X' : 'O';
    this.setState({
      squares: squares,
      value: !this.state.value,
    });
  }
  render() {
    let win = checkForWin(this.state.squares);
    let announce;
    if(win) announce = 'Congratulations, ' + win + " wins!";
    
    return (
      <div>
        <div className="announce">{announce}</div>
        {/* <button className="reset" onClick={this.reset}>Reset</button> */}
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function checkForWin(squares) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for( let i = 0; i < winCombos.length; i++ ) {
        const [a, b, c] = winCombos[i];
        if( squares[a]  === squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
            return squares[a];
        }
    }
    return null;
  }

ReactDOM.render(<Game />, document.getElementById('tic-tac-toe'));