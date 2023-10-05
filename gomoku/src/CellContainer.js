import React from "react";

export default function CellContainer(props) {
  // const board = [];

  // for(let i = 0 ; i < props.전달.length ; i ++) {
  //     const boardRow = [];
  //     for(let j = 0 ; j < props.전달[0].length ; j ++) {
  //         boardRow.push(<div className='cell'></div>)
  //     }
  //     board.push(<div className='row'>{boardRow}</div>)
  // }

  return (
    <>
      {props.전달.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div
              className="cell"
              key={cellIndex}
              onClick={() => {
                props.착수함수(rowIndex, cellIndex);
              }}
            >
              {cell !== null ? (
                <div
                  className={`stone ${cell === "black" ? "black" : "white"}`}
                ></div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
