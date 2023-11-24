import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './MyMap.css'
import { usePosition } from '../../hooks/usePosition';
import { useEffect, useState } from 'react';

const MyMap = () => {

  const [zoom, setZoom] = useState(4);

  const myPostion = usePosition();

  // useEffect( () => {
  //   myPostion = { latitude: 55, longitude: 55, error: false}
  //   },
  // [myPostion]
  // )


  return (
    <div className='map'>
      <YMaps>
        <Map className="m" defaultState={{center: [myPostion.latitude, myPostion.longitude], zoom: zoom} } >
            { 
              !myPostion.error && <Placemark geometry={[myPostion.latitude, myPostion.longitude]}/> 
            }
        </Map>
      </YMaps>
    </div>
  );
}

export default MyMap
