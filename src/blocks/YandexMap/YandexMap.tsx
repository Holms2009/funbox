import block from "bem-cn";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { pointParams } from "../App/App";

import './YandexMap.scss';

const b = block('YandexMap');

type Props = {
  points: pointParams[];
}

function YandexMap({ points }: Props) {
  const markerOptions = {
    draggable: true,
    hasBaloon: true,
    openBalloonOnClick: true
  }

  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={'40vw'}
        height={'50vh'}
      >{points.map(point => <Placemark geometry={point.point} options={markerOptions} />)}</Map>
    </YMaps>
  )
}

export default YandexMap;