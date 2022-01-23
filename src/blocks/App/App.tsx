import { FormEvent, useState } from 'react';

import './App.scss';
import YandexMap from '../YandexMap/YandexMap'
import PointInputBlock from '../PointInputBlock/PointInputBlock';
import PointsList from '../PointsList/PointsList';

export type pointParams = {
  name: string;
  point: number[];
}

function reorder(list: pointParams[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

function App() {
  const initialState: pointParams[] = [{ name: 'Москва', point: [55.75, 37.57] }];
  const [points, setPoints] = useState(initialState);

  function onDragEnd(result: any) {
    if (!result.destination) return;

    const items = reorder(points, result.source.index, result.destination.index);
    setPoints(items);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newPoint = { name: String(formData.get('text')), point: [55.75, 37.57] };

    if (!newPoint.name.length) return;

    setPoints([...points, newPoint]);
  }

  const handleRemoveItem = (index: number) => {
    const allPoints: pointParams[] = Array.from(points);

    allPoints.splice(index, 1);
    setPoints(allPoints);
  }

  return (
    <div className="App">
      <YandexMap points={points} />
      <PointInputBlock submitHandler={handleSubmit} />
      <PointsList pointsArr={points} clickHandler={handleRemoveItem} dragEnd={onDragEnd}/>
    </div>
  );
}

export default App;
