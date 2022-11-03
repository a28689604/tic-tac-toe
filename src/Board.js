import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => {
    // IMPORTANT wrap up onClick, or it will cause infinity loop
    return <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  let squareCounter = 0;
  const board = [];
  for (let row = 0; row < 3; row++) {
    const rowList = [];
    for (let col = 0; col < 3; col++) {
      rowList.push(renderSquare(squareCounter++));
    }
    board.push(
      <div key={row} className="board-row">
        {rowList}
      </div>
    );
  }

  return <>{board}</>;
};

export default Board;
