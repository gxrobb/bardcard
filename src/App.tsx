import React from 'react'
import { Button, Container, Typography } from '@mui/material'

export function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Bardcard
      </Typography>
      <Typography variant="body1" paragraph>
        Your Vite + React + Material UI application is running!
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  )
}

export default App