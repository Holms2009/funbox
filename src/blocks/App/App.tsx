import { FormEvent, useState } from 'react';

import './App.scss';
import YandexMap from '../YandexMap/YandexMap'
import PointInputBlock from '../PointInputBlock/PointInputBlock';
import PointsList from '../PointsList/PointsList';

function App() {
	const [points, setPoints] = useState(['Москва']);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
		const formData = new FormData(evt.currentTarget);
    const newPoint = String(formData.get('text'));

    if (!newPoint.length) return;
		
    setPoints([...points, newPoint]);
  }
  
  const handleRemoveItem = (index: number) => {
    const allPoints: string[] = Array.from(points);
    allPoints.splice(index, 1);

    setPoints(allPoints);
  }

  return (
    <div className="App">
      <YandexMap />
      <PointInputBlock submitHandler={handleSubmit} />
      <PointsList pointsArr={points} clickHandler={handleRemoveItem}/>
    </div>
  );
}

export default App;
