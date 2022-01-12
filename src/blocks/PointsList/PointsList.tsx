import block from "bem-cn";

import './PointsList.scss';

const b = block('PointsList');

type Props = {
  pointsArr: string[];
}

function PointsList({ pointsArr }: Props) {
  let listItems = pointsArr.map((point, index) => (
    <li className={b('item')} key={index}>
      <span className={b('point-name')}>{point}</span>
    </li>
  ));

  return (
    <ul className={b()}>{listItems}</ul>
  )
}

export default PointsList;