import React, {useState, useEffect} from 'react'
import {Box, TextField} from '@material-ui/core'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket

const Chat = ({location}) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost'

  useEffect(() => {
    const {name, room} = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    socket.emit('join', {name, room}, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <Box>
      <TextField
        onChange={(e) => setMessage(e.target.value)}
        id="outlined-basic"
        label="Outlined"
        value={message}
        variant="outlined"
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
    </Box>
  )
}

export default Chat
