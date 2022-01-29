import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
import { MapEvent } from "yandex-maps";

import './YandexMap.scss';

type Props = {
  points: pointParams[];
  pointDragHandler: (evt: MapEvent, index: number) => void;
  mapMoveHandler: (evt: MapEvent) => void;
}


function YandexMap({ points, pointDragHandler, mapMoveHandler }: Props) {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 15 }}
        width={'100%'}
        height={'60vh'}
        onBoundsChange={mapMoveHandler}
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
            onDrag={(evt: MapEvent) => pointDragHandler(evt, index)}
            onDragEnd={(evt: MapEvent) => pointDragHandler(evt, index)}
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