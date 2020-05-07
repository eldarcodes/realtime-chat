import React, {useState} from 'react'
import {
  Typography,
  Paper,
  TextField,
  Box,
  Button,
  Divider,
} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{
        height: '100vh',
      }}
    >
      <Paper elevation={2} style={{padding: '2rem', width: '450px'}}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h3">Join</Typography>
          <Divider />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box width={1} mb={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box width={1} mb={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Room"
              variant="outlined"
              onChange={(e) => setRoom(e.target.value)}
            />
          </Box>
          <Box width={1}>
            <Link
              onClick={(e) => (!name || !room) && e.preventDefault()}
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button
                style={{padding: '10px 0'}}
                fullWidth
                variant={'outlined'}
                color={'primary'}
              >
                Sign in
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Join
