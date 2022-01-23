import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";
import { pointParams } from "../App/App";

import './YandexMap.scss';

type Props = {
  points: pointParams[];
}

function YandexMap({ points }: Props) {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={'40vw'}
        height={'50vh'}
      >
        {points.map((point, index) => {
          const marker = {
            geometry: point.point,
            options: {
              draggable: true,
              hasBalloon: true
            },
            properties: {
              iconContent: index + 1,
              balloonContent: point.name
            },
            modules: ['geoObject.addon.balloon']
          }

          return (<Placemark {...marker} key={index}/>)
        })}
      </Map>
    </YMaps>
  )
}

export default YandexMap;