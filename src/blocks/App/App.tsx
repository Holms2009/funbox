import React, { FormEvent, useState } from 'react';

import './App.scss';
import YandexMap from '../YandexMap/YandexMap'
import PointInputBlock from '../PointInputBlock/PointInputBlock';
import PointsList from '../PointsList/PointsList';
import reorder from '../../utils/reorder';

export type pointParams = {
  name: string;
  point: number[];
}

function App() {
  const initialState: pointParams[] = [{ name: 'Москва', point: [55.75, 37.57] }];
  let xOffset: number, yOffset: number;
  const [points, setPoints] = useState(initialState);

  function moveTo(item: HTMLElement, coords: { x: number, y: number }) {
    item.style.left = String(coords.x - xOffset) + 'px';
    item.style.top = String(coords.y - yOffset) + 'px';
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newPoint = { name: String(formData.get('text')), point: [55.75, 37.57] };

    if (!newPoint.name.length) return;

    setPoints([...points, newPoint]);
  }

  function pickItem(evt: React.MouseEvent<HTMLElement>) {
    const pickedItem = evt.currentTarget;
    const eventPosition = { x: evt.clientX, y: evt.clientY };

    xOffset = eventPosition.x - pickedItem.getBoundingClientRect().left;
    yOffset = eventPosition.y - pickedItem.getBoundingClientRect().top;

    pickedItem.classList.add('picked');
    moveTo(pickedItem, eventPosition);
  }

  function mouseMove(evt: React.MouseEvent<HTMLElement>) {
    const pickedItem = evt.currentTarget;

    if (!pickedItem.matches('.picked')) return;

    const eventPosition = { x: evt.clientX, y: evt.clientY };
    moveTo(pickedItem, eventPosition);
  }

  function dropItem(evt: React.MouseEvent<HTMLElement>) {
    const pickedItem = evt.currentTarget;
    pickedItem.classList.remove('picked');
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
      <PointsList pointsArr={points} clickHandler={handleRemoveItem} onMouseDown={pickItem} onMouseUp={dropItem} onMouseMove={mouseMove} />
    </div>
  );
}

export default App;
