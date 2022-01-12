import block from "bem-cn";
import './PointsList.scss';

const b = block('PointsList');

type Props = {
  pointsArr: string[];
  clickHandler: any;
}

function PointsList({ pointsArr, clickHandler }: Props) {
  const listItems = pointsArr.map((point, index) => (
    <li className={b('item')} key={index}>
      <span className={b('point-name')}>{point}</span>
      <button className={b('button')} type='button' onClick={() => clickHandler(index)}></button>
    </li>
  ));

  return (
    <ul className={b()}>{listItems}</ul>
  )
}

export default PointsList;