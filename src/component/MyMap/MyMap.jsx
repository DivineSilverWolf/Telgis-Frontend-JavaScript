import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './MyMap.css'
import { usePosition } from '../../hooks/usePosition';
import { useEffect, useState } from 'react';

const MyMap = () => {
  // const {YMapMarker} = window.ymaps3;

  const [zoom, setZoom] = useState(15);
  const {latitude, longitude, error} = usePosition();

  const [friends, setFriends] = useState(
  [
    {
      id: 1,
      latitude: 51,
      longitude: 79,
      name: 'Maxim Kurbatov'
    },
    {
      id: 2,
      latitude: 55,
      longitude: 47,
      name: 'Vlad Balashov',
    },
    {
      id: 3,
      latitude: 53,
      longitude: 48,
      name: 'Sasha Litvinenko',
    },
    {
      id: 4,
      latitude: 51,
      longitude: 49,
      name: 'Igor Epov'
    },
  ]
  );

  const defaultPosition = [
    latitude ? latitude : 10,
    longitude ? longitude : 10
  ]

  // useEffect( async () => {
  //   const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
  //   const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
  //   const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(ymaps3);
  // },[])

  return (
    <div className='map-container'>
      <YMaps>
        <Map className='map' defaultState={{center: defaultPosition, zoom: zoom} } >
            { 
            !error &&
              <Placemark   
                geometry={[latitude, longitude]} 

                properties={{
                  iconCaption : 'Me',
                }}

                onClick={() => { console.log('Маркер был нажат');}}
              /> 
            } 
            {
            friends.map(friend => {
              return (
                <Placemark 
                  key={friend.id} 
                  geometry={[friend.latitude, friend.longitude]} 
                  properties={{
                    iconCaption : friend.name,
                  }}
                  onClick={() => { console.log('Маркер был нажат');}} 
                />
              )})
            }
        </Map>
      </YMaps>
    </div>
  );
}

export default MyMap


// import React, { useEffect, useRef } from 'react';
// import './MyMap.css';
// import { Map, View } from 'ol';
// import FullScreen from 'ol/control/FullScreen';
// import olms from 'ol-mapbox-style';
// import { transform } from 'ol/proj';

// const MyMap = ({
//   mapIsReadyCallback /* To be triggered when a map object is created */,
// }) => {
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     const initialState = {
//       lng: 11,
//       lat: 49,
//       zoom: 4,
//     };

//     // This API key is for use only in stackblitz.com
//     // Get your Geoapify API key on https://www.geoapify.com/get-started-with-maps-api
//     // The Geoapify service is free for small projects and the development phase.
//     const myAPIKey = '18c85a44a76042788847e2fb74d27386';
//     const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

//     olms(mapContainer.current, `${mapStyle}?apiKey=${myAPIKey}`).then((map) => {
//       map
//         .getView()
//         .setCenter(
//           transform(
//             [initialState.lng, initialState.lat],
//             'EPSG:4326',
//             'EPSG:3857'
//           )
//         );
//       map.getView().setZoom(initialState.zoom);

//       mapIsReadyCallback(map);
//     });
//   }, [mapContainer.current]);

//   return <div className="map-container" ref={mapContainer}></div>;
// };

// export default MyMap;
