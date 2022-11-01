import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => {
    // IMPORTANT wrap up onClick, or it will cause infinity loop
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
