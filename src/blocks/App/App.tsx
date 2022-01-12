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

  return (
    <div className="App">
      <YandexMap />
      <PointInputBlock submitHandler={handleSubmit} />
      <PointsList pointsArr={points}/>
    </div>
  );
}

export default App;
