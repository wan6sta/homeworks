import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Some Name',
  message: 'some text',
  time: '22:00',
}

function HW1() {
  return (
    <div>
      <hr/>
      homeworks 1

      {/*should work (должно работать)*/}

      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      <AlternativeMessage
        ava={'https://i.scdn.co/image/ab67616d0000b27363f1ea45b0bbc78ed99ad843'}
        likes={12321}
        mess={'Это мое альтернативное сообщение!'}
      />
      <hr/>
    </div>
  )
}

export default HW1
