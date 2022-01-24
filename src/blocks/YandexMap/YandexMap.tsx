import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
import { pointParams } from "../App/App";

import './YandexMap.scss';

type Props = {
  points: pointParams[];
  pointDragHandler: any;
}

function YandexMap({ points, pointDragHandler }: Props) {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={'100%'}
        height={'60vh'}
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

          return (<Placemark
            {...marker}
            key={index}
            onDrag={(evt: any) => pointDragHandler(evt, index)}
            onDragEnd={(evt: any) => pointDragHandler(evt, index)}
          />)
        })}
        {points.map((point, index) => {
          if (!points[index + 1]) return;

          return (
            <Polyline
              key={index}
              geometry={[point.point, points[index + 1].point]}
              options={{
                strokeColor: '#000000',
                strokeWidth: 3,
                strokeOpacity: 0.5,
              }}
            />
          )
        })}
      </Map>
    </YMaps>
  )
}

export default YandexMap;