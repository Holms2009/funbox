import block from "bem-cn";
import { YMaps, Map } from "react-yandex-maps";

import './YandexMap.scss';

const b = block('YandexMap');

type Props = {

}

function YandexMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={'40vw'}
        height={'50vh'}
         />
    </YMaps>
  )
}

export default YandexMap;