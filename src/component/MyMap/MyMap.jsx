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

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log(latitude, longitude)

    UserService.postUserLocationByUserId(userInfo.login, latitude, longitude)
      .then(res => {
        if (!res) {
          setNotification('Не получилось отправить данные о своей позиции');
        }
        else {
          setNotification('Успешно отправили данные о своей позиции');
        }
      })
      .catch(e => setNotification('Не получилось получить данные о местоположении пользователей'))

    UserService.getFriendsLocation(userInfo.login)
      .then(friendsLocations => {
        if (friendsLocations) {
          setFriends(friendsLocations);
        }
        else {
          setNotification('Не получилось получить данные о местоположении пользователей');
        }
      })
      .catch(e => setNotification('Не получилось получить данные о местоположении пользователей'))
  },[])

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
