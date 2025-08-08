import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Paper,
  IconButton,
  Badge,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Add as AddIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material' 

function App() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const contacts = [
    { name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 234 567 8901' },
    { name: 'Bob Smith', email: 'bob@example.com', phone: '+1 234 567 8902' },
    { name: 'Carol Williams', email: 'carol@example.com', phone: '+1 234 567 8903' },
  ]

  const cards = [
    {
      title: 'Project Alpha',
      description: 'A revolutionary new product that will change everything.',
      status: 'Active',
      progress: 75,
    },
    {
      title: 'Marketing Campaign',
      description: 'Q3 marketing initiatives for brand awareness.',
      status: 'Planning',
      progress: 30,
    },
    {
      title: 'User Research',
      description: 'Gathering insights from our user base for improvements.',
      status: 'Completed',
      progress: 100,
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bardcard Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Bardcard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Your comprehensive project management and collaboration platform
          </Typography>
          
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 3 }}
          >
            <TextField
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search projects, contacts, or tasks..."
              variant="standard"
              InputProps={{ disableUnderline: true }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Status Chips */}
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <Chip label="Active Projects" color="primary" />
            <Chip label="Team Members: 12" color="secondary" />
            <Chip label="Tasks Completed: 45" color="success" />
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Project Cards */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Current Projects
            </Typography>
            <Grid container spacing={3}>
              {cards.map((card, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {card.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip 
                          label={card.status} 
                          size="small"
                          color={card.status === 'Active' ? 'primary' : 
                                 card.status === 'Completed' ? 'success' : 'default'}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {card.progress}% complete
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small" startIcon={<FavoriteIcon />}>
                        Like
                      </Button>
                      <Button size="small" startIcon={<ShareIcon />}>
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contacts Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Team Contacts
              </Typography>
              <List>
                {contacts.map((contact, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={contact.name}
                        secondary={
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <EmailIcon fontSize="small" />
                              <Typography variant="caption">{contact.email}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <PhoneIcon fontSize="small" />
                              <Typography variant="caption">{contact.phone}</Typography>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < contacts.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" size="large">
            View All Projects
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Generate Report
          </Button>
          <Button variant="text" onClick={handleClickOpen}>
            Open Dialog Example
          </Button>
        </Box>
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      {/* Dialog Example */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              autoFocus
              label="Project Name"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Team Lead"
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">Create Project</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default App