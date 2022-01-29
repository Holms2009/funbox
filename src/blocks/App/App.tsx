import { FormEvent, useEffect, useState } from 'react';
import block from 'bem-cn';

import './App.scss';

import YandexMap from '../YandexMap/YandexMap'
import PointInputBlock from '../PointInputBlock/PointInputBlock';
import PointsList from '../PointsList/PointsList';
import { DropResult } from 'react-beautiful-dnd';
import { MapEvent } from 'yandex-maps';

const b = block('App');

export function reorder(list: pointParams[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

function App() {
  const initialState: pointParams[] = [{ name: 'Первая точка', point: [55.75, 37.57] }];
  const [points, setPoints] = useState(initialState);
  const [mapCenter, setMapCenter] = useState([55.75, 37.57]);
  const [theme, setTheme] = useState('dark');
  const [preload, setPreload] = useState(true);

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = reorder(points, result.source.index, result.destination.index);
    setPoints(items);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newPoint = { name: String(formData.get('text')), point: mapCenter };

    if (!newPoint.name.length) return;

    setPoints([...points, newPoint]);
  }

  function handleRemoveItem(index: number) {
    const allPoints: pointParams[] = Array.from(points);

    allPoints.splice(index, 1);
    setPoints(allPoints);
  }

  function handleMapMove(evt: MapEvent) {
    const newCenter = evt.get('newCenter');
    setMapCenter(newCenter);
  }

  function handlePointDrag(evt: MapEvent, index: number) {
    const pointsArr = Array.from(points);
    const newCoords = evt.get('target').geometry.getCoordinates();

    pointsArr[index].point = newCoords;
    setPoints(pointsArr);
  }

  function toggleTheme(evt: React.MouseEvent) {
    let currentTheme = theme;

    if (currentTheme === 'dark') {
      currentTheme = 'light';
    } else {
      currentTheme = 'dark';
    }

    setTheme(currentTheme);
    evt.preventDefault();
  }

  useEffect(() => {
    setTimeout(() => { setPreload(false) }, 1000);
  })

  return (
    <div className={b({ dark: theme === 'dark', light: theme === 'light', preload: preload })}>
      <YandexMap points={points} pointDragHandler={handlePointDrag} mapMoveHandler={handleMapMove} />
      <PointInputBlock submitHandler={handleSubmit} theme={theme} />
      <PointsList pointsArr={points} itemRemoveHandler={handleRemoveItem} dragEnd={onDragEnd} theme={theme} />
      <div className={b('theme-toggle-button', { dark: theme === 'light', light: theme === 'dark' })} onClick={toggleTheme} title='Переключить тему'></div>
    </div>
  );
}

export default App;
