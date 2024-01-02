import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { usePosition } from '../../hooks/usePosition';
import { React, useEffect, useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import UserService from '../../api/UserService';
import { UserInfoContext } from '../../context/UserInfoContext';
import { NotificationContext } from '../../context/NotificationContext';

import './MyMap.css'

const MyMap = () => {
  const [zoom, setZoom] = useState(15);
  const {latitude, longitude, error} = usePosition();
  const [{chatId, setChatId}, {chatBarVisible, setChatBarVisible}, {chatName, setChatName}] = useContext(ChatContext)
	const {userInfo, setUserInfo} = useContext(UserInfoContext)
	const {notification, setNotification} = useContext(NotificationContext)

  // useEffect(() => {
  //   UserService.postUserLocationByUserId(userInfo.login, latitude, longitude)
  //     .then(res => {
  //       if (!res) {
  //         setNotification('Не получилось отправить данные о своей позиции');
  //       }
  //       else {
  //         setNotification('Успешно отправили данные о своей позиции');
  //       }
  //     })

  //     // UserService.getLocations();
  // },[])


  const [friends, setFriends] = useState(
  [
    {
      id: 1,
      latitude: 54.8509,
      longitude: 83.09,
      name: 'Maxim Kurbatov'
    },
    {
      id: 2,
      latitude: 54.845,
      longitude: 83.09,
      name: 'Vlad Balashov',
    },
    {
      id: 3,
      latitude: 54.842,
      longitude: 83.09,
      name: 'Sasha Litvinenko',
    }
  ]
  );

  const defaultPosition = [
    latitude ? latitude : 10,
    longitude ? longitude : 10
  ]

  const handleClick = (friend) => {
    setChatBarVisible(true)
    setChatName(friend.name)
  }

  return (
    <div className='map-container'>
      <YMaps>
        <Map className='map' defaultState={{center: defaultPosition, zoom: zoom} } >
            { 
            !error &&
              <Placemark className='placemark'
                geometry={[latitude, longitude]} 

                properties={{
                  iconCaption : 'Me',
                }}
                
                options={{
                  iconColor: 'red' 
                }}
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
                  onClick={() => handleClick(friend)}
                />
              )})
            }
        </Map>
      </YMaps>
    </div>
  );
}

export default MyMap
