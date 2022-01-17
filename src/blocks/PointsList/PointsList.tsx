import block from "bem-cn";

import './PointsList.scss';

import { pointParams } from "../App/App";
import React from "react";

const b = block('PointsList');

type Props = {
  pointsArr: pointParams[];
  clickHandler: any;
  onMouseDown: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
  onMouseMove: React.MouseEventHandler;
}

function PointsList({ pointsArr, clickHandler, onMouseDown, onMouseUp, onMouseMove }: Props) {
  const listItems = pointsArr.map((point, index) => (
    <li className={b('item')} key={index} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <span className={b('point-name')}>{point.name}</span>
      <button className={b('button')} type='button' onClick={() => clickHandler(index)}></button>
    </li>
  ));

  return (
    <ul className={b()}>{listItems}</ul>
  )
}

export default PointsList;